/**
 * Default copy for `/login` and `/profile`.
 *
 * These two pages are auth-driven app UI, not blocks, so their labels come from
 * the `siteSettings` global. This module holds the strings once and feeds them
 * to both sides: the global uses them as `defaultValue`s, and the pages use them
 * as the render-time fallback for a settings document that was saved before
 * these fields existed.
 */

export const LOGIN_DEFAULTS = {
  title: 'Нэвтрэх',
  identifierLabel: 'Утасны дугаар',
  identifierPlaceholder: '99112233',
  passwordLabel: 'Нууц үг',
  passwordPlaceholder: '••••••••',
  submitLabel: 'Нэвтрэх',
  pendingLabel: 'Түр хүлээнэ үү…',
  forgotLabel: 'Нууц үгээ мартсан уу?',
  dividerLabel: 'Эсвэл',
  registerLabel: 'Бүртгүүлэх',
  resetLabel: 'Нууц үг сэргээх',
  backLabel: 'Нүүр хуудас',
}

export const PROFILE_DEFAULTS = {
  headerLinkLabel: 'Профайл',
  greeting: 'Тавтай морил, {name}',
  menuAccountLabel: 'Хэрэглэгч',
  menuLogoutLabel: 'Системээс Гарах',
  panelTitle: 'Хэрэглэгчийн Тохиргоо',
  editLabel: 'Мэдээлэл өөрчлөх',
  generalTitle: 'Ерөнхий Мэдээлэл',
  phoneLabel: 'Утасны дугаар',
  emailLabel: 'Цахим шуудан',
  passwordTitle: 'Нууц үг',
  passwordEditLabel: 'Нууц үг солих',
  passwordFieldLabel: 'Нууц үг',
}

/**
 * Failure text is not editor chrome — it has to stay in sync with the auth
 * behaviour it describes (Payload locks an account after 5 attempts for 10
 * minutes), so it lives in code rather than in the global.
 */
export const AUTH_MESSAGES = {
  missing: 'Нэвтрэх нэр болон нууц үгээ бөглөнө үү.',
  invalid: 'Утасны дугаар/и-мэйл эсвэл нууц үг буруу байна.',
  locked: 'Хэт олон удаа буруу оролдсон тул бүртгэл түр хаагдлаа. 10 минутын дараа дахин оролдоно уу.',
  failed: 'Нэвтрэхэд алдаа гарлаа. Дараа дахин оролдоно уу.',
}

/** The default landing page after a successful login. */
export const AFTER_LOGIN_PATH = '/profile'
export const AFTER_LOGOUT_PATH = '/'
