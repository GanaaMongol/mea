/**
 * Copy and limits for the `contactForm` block's submit action. Kept out of the
 * action file because a `'use server'` module may only export async functions.
 */
export const FEEDBACK_MESSAGES = {
  missing: 'Бүх талбарыг бөглөнө үү.',
  email: 'Имэйл хаяг буруу байна.',
  tooLong: 'Хэт урт байна. Богиносгоно уу.',
  tooOften: 'Хэт олон хүсэлт илгээлээ. Хэсэг хүлээгээд дахин оролдоно уу.',
  failed: 'Илгээхэд алдаа гарлаа. Дараа дахин оролдоно уу.',
}

export const FEEDBACK_MAX = { name: 120, email: 160, phone: 40, message: 4000 }

export const FEEDBACK_RATE_LIMIT = { max: 3, windowMs: 10 * 60 * 1000 }
