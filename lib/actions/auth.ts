'use server'

import { cookies, headers as nextHeaders } from 'next/headers'
import { redirect } from 'next/navigation'
import { AuthenticationError, createLocalReq, LockedAuth, logoutOperation } from 'payload'
import { generateExpiredPayloadCookie, generatePayloadCookie } from 'payload/shared'

import { AFTER_LOGIN_PATH, AFTER_LOGOUT_PATH, AUTH_MESSAGES } from '@/lib/authLabels'
import { getPayloadClient } from '@/lib/payload'
import { normalizePhone } from '@/lib/phone'

export type LoginState = {
  error?: string
  /** Kept so a failed submit does not wipe what the visitor typed. */
  identifier?: string
}

/** Only same-site paths may be used as a post-login destination. */
const safePath = (value: unknown, fallback: string): string => {
  const path = typeof value === 'string' ? value : ''
  return path.startsWith('/') && !path.startsWith('//') ? path : fallback
}

/**
 * Members log in with the phone number they registered with, or with their
 * e-mail. Payload authenticates on e-mail, so a phone is resolved to its
 * member's e-mail first — deliberately without telling the visitor which half
 * of the pair was wrong.
 */
export async function loginAction(_state: LoginState, formData: FormData): Promise<LoginState> {
  const identifier = String(formData.get('identifier') ?? '').trim()
  const password = String(formData.get('password') ?? '')
  const next = safePath(formData.get('next'), AFTER_LOGIN_PATH)

  if (!identifier || !password) {
    return { error: AUTH_MESSAGES.missing, identifier }
  }

  const payload = await getPayloadClient()
  let email = identifier.toLowerCase()

  if (!identifier.includes('@')) {
    const phone = normalizePhone(identifier)
    if (!phone) return { error: AUTH_MESSAGES.invalid, identifier }

    const { docs } = await payload.find({
      collection: 'members',
      where: { phone: { equals: phone } },
      limit: 1,
      depth: 0,
      pagination: false,
      overrideAccess: true,
    })

    const found = docs[0]?.email
    if (!found) return { error: AUTH_MESSAGES.invalid, identifier }
    email = found
  }

  let token: string | undefined

  try {
    const result = await payload.login({
      collection: 'members',
      data: { email, password },
      depth: 0,
    })
    token = result.token
  } catch (error) {
    if (error instanceof LockedAuth) return { error: AUTH_MESSAGES.locked, identifier }
    if (error instanceof AuthenticationError) return { error: AUTH_MESSAGES.invalid, identifier }
    console.error('[auth] login failed:', error)
    return { error: AUTH_MESSAGES.failed, identifier }
  }

  if (!token) return { error: AUTH_MESSAGES.failed, identifier }

  const cookie = generatePayloadCookie({
    collectionAuthConfig: payload.collections.members.config.auth,
    cookiePrefix: payload.config.cookiePrefix,
    returnCookieAsObject: true,
    token,
  })

  const store = await cookies()
  store.set({
    name: cookie.name,
    value: cookie.value ?? '',
    domain: cookie.domain,
    expires: cookie.expires ? new Date(cookie.expires) : undefined,
    httpOnly: true,
    path: cookie.path ?? '/',
    sameSite: (cookie.sameSite?.toLowerCase() as 'lax' | 'none' | 'strict') ?? 'lax',
    secure: Boolean(cookie.secure),
  })

  // Outside the try/catch: `redirect` signals by throwing.
  redirect(next)
}

/** Drops the server-side session as well as the cookie. */
export async function logoutAction(): Promise<void> {
  const payload = await getPayloadClient()

  try {
    const { user } = await payload.auth({ headers: await nextHeaders() })

    if (user?.collection === 'members') {
      const req = await createLocalReq({ user }, payload)
      await logoutOperation({ collection: payload.collections.members, req })
    }
  } catch (error) {
    // A session that cannot be found is already gone; still clear the cookie.
    console.error('[auth] logout cleanup failed:', error)
  }

  const cookie = generateExpiredPayloadCookie({
    collectionAuthConfig: payload.collections.members.config.auth,
    cookiePrefix: payload.config.cookiePrefix,
    returnCookieAsObject: true,
  })

  const store = await cookies()
  store.set({
    name: cookie.name,
    value: '',
    domain: cookie.domain,
    expires: new Date(0),
    httpOnly: true,
    path: cookie.path ?? '/',
    sameSite: (cookie.sameSite?.toLowerCase() as 'lax' | 'none' | 'strict') ?? 'lax',
    secure: Boolean(cookie.secure),
  })

  redirect(AFTER_LOGOUT_PATH)
}
