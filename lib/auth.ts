import 'server-only'

import { headers as nextHeaders } from 'next/headers'

import type { Member } from '@/payload-types'

import { getPayloadClient } from './payload'

/**
 * The signed-in public account, or `null`. `members` and `users` share one
 * cookie, so an admin browsing the site is deliberately *not* treated as a
 * member — the site session is only ever a `members` document.
 */
export const getMember = async (): Promise<Member | null> => {
  // Outside the try: `headers()` also throws Next's "this route is dynamic"
  // signal, which must not be swallowed as a failed session lookup.
  const requestHeaders = await nextHeaders()

  try {
    const payload = await getPayloadClient()
    const { user } = await payload.auth({ headers: requestHeaders })

    if (user?.collection === 'members') return user as Member
    return null
  } catch (error) {
    console.error('[auth] session lookup failed:', error)
    return null
  }
}

/** `/profile` shows whichever name the member actually filled in. */
export const memberDisplayName = (member: Member): string =>
  member.fullName?.trim() || member.email
