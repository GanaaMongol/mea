'use server'

import { cookies, headers as nextHeaders } from 'next/headers'
import { redirect } from 'next/navigation'
import { AuthenticationError, createLocalReq, LockedAuth, logoutOperation } from 'payload'
import { generateExpiredPayloadCookie, generatePayloadCookie } from 'payload/shared'

import {
  AFTER_LOGIN_PATH,
  AFTER_LOGOUT_PATH,
  AUTH_MESSAGES,
  MIN_PASSWORD_LENGTH,
  PASSWORD_MESSAGES,
} from '@/lib/authLabels'
import { localeHref, toLocale } from '@/lib/i18n'
import { getPayloadClient } from '@/lib/payload'
import { normalizePhone } from '@/lib/phone'

export type PasswordState = {
  error?: string
  success?: string
}

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

  await setSessionCookie(token)

  // Outside the try/catch: `redirect` signals by throwing.
  redirect(next)
}

/** Writes the session cookie Payload would have set over REST. */
async function setSessionCookie(token: string): Promise<void> {
  const payload = await getPayloadClient()
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
}

/** Drops the server-side session as well as the cookie. */
export async function logoutAction(formData?: FormData): Promise<void> {
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

  redirect(localeHref(AFTER_LOGOUT_PATH, toLocale(formData?.get('locale'))))
}

/**
 * Changing a password is an authenticated operation twice over: the session
 * cookie says who is asking, and the current password has to be re-typed —
 * Payload's own lockout applies to that check, so a hijacked session cannot be
 * used to brute-force it. On success every session is dropped (a password
 * change should log other devices out) and this browser is issued a fresh one.
 */
export async function changePasswordAction(
  _state: PasswordState,
  formData: FormData,
): Promise<PasswordState> {
  const currentPassword = String(formData.get('currentPassword') ?? '')
  const newPassword = String(formData.get('newPassword') ?? '')
  const confirmPassword = String(formData.get('confirmPassword') ?? '')

  const payload = await getPayloadClient()
  const { user } = await payload.auth({ headers: await nextHeaders() })

  if (!user || user.collection !== 'members') return { error: PASSWORD_MESSAGES.signedOut }

  if (!currentPassword || !newPassword || !confirmPassword) {
    return { error: PASSWORD_MESSAGES.missing }
  }
  if (newPassword !== confirmPassword) return { error: PASSWORD_MESSAGES.mismatch }
  if (newPassword.length < MIN_PASSWORD_LENGTH) return { error: PASSWORD_MESSAGES.tooShort }
  if (newPassword === currentPassword) return { error: PASSWORD_MESSAGES.same }

  try {
    await payload.login({
      collection: 'members',
      data: { email: user.email, password: currentPassword },
      depth: 0,
    })
  } catch (error) {
    if (error instanceof LockedAuth) return { error: PASSWORD_MESSAGES.locked }
    if (error instanceof AuthenticationError) return { error: PASSWORD_MESSAGES.wrongCurrent }
    console.error('[auth] password check failed:', error)
    return { error: PASSWORD_MESSAGES.failed }
  }

  try {
    // The session cookie already proved who this is, so the write targets that
    // id directly rather than anything the form could have carried.
    await payload.update({
      collection: 'members',
      id: user.id,
      data: { password: newPassword },
      depth: 0,
    })

    const req = await createLocalReq({ user }, payload)
    await logoutOperation({ allSessions: true, collection: payload.collections.members, req })

    const { token } = await payload.login({
      collection: 'members',
      data: { email: user.email, password: newPassword },
      depth: 0,
    })

    if (token) await setSessionCookie(token)
  } catch (error) {
    console.error('[auth] password change failed:', error)
    return { error: PASSWORD_MESSAGES.failed }
  }

  return { success: PASSWORD_MESSAGES.success }
}
