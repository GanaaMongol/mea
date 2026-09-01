'use server'

import { headers as nextHeaders } from 'next/headers'

import { FEEDBACK_MAX, FEEDBACK_MESSAGES, FEEDBACK_RATE_LIMIT } from '@/lib/feedbackLabels'
import { getPayloadClient } from '@/lib/payload'

export type FeedbackState = {
  error?: string
  ok?: boolean
}

/**
 * Per-IP throttle. In-memory on purpose: it costs nothing, survives a burst from
 * one source, and a restart clearing it is acceptable for a contact form. Swap
 * for a shared store if the site ever runs on more than one instance.
 */
const recent = new Map<string, number[]>()

const isRateLimited = (key: string): boolean => {
  const now = Date.now()
  const hits = (recent.get(key) ?? []).filter((at) => now - at < FEEDBACK_RATE_LIMIT.windowMs)

  if (hits.length >= FEEDBACK_RATE_LIMIT.max) {
    recent.set(key, hits)
    return true
  }

  hits.push(now)
  recent.set(key, hits)

  // Keep the map from growing without bound on a long-running server.
  if (recent.size > 5000) {
    for (const [ip, times] of recent) {
      if (times.every((at) => now - at >= FEEDBACK_RATE_LIMIT.windowMs)) recent.delete(ip)
    }
  }

  return false
}

const isEmail = (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)

/** Public endpoint: everything it writes is validated and length-capped here. */
export async function submitFeedbackAction(
  _state: FeedbackState,
  formData: FormData,
): Promise<FeedbackState> {
  // Honeypot — a real visitor never sees this field, bots fill it in.
  if (String(formData.get('website') ?? '')) return { ok: true }

  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim().toLowerCase()
  const phone = String(formData.get('phone') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !email || !phone || !message) return { error: FEEDBACK_MESSAGES.missing }
  if (!isEmail(email)) return { error: FEEDBACK_MESSAGES.email }
  if (
    name.length > FEEDBACK_MAX.name ||
    email.length > FEEDBACK_MAX.email ||
    phone.length > FEEDBACK_MAX.phone ||
    message.length > FEEDBACK_MAX.message
  ) {
    return { error: FEEDBACK_MESSAGES.tooLong }
  }

  const requestHeaders = await nextHeaders()
  const ip =
    requestHeaders.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    requestHeaders.get('x-real-ip') ||
    'unknown'

  if (isRateLimited(ip)) return { error: FEEDBACK_MESSAGES.tooOften }

  try {
    const payload = await getPayloadClient()
    await payload.create({
      collection: 'feedback',
      data: {
        name,
        email,
        phone,
        message,
        status: 'new',
        sourceUrl: requestHeaders.get('x-pathname') ?? undefined,
      },
    })
  } catch (error) {
    console.error('[feedback] submit failed:', error)
    return { error: FEEDBACK_MESSAGES.failed }
  }

  return { ok: true }
}
