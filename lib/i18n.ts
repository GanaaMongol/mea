/**
 * URL-ийн хэл. `mn` бол default бөгөөд prefix-гүй (`/news`), `en` нь prefix-тэй
 * (`/en/news`). `proxy.ts` prefix-гүй хаягийг `/mn/...` руу rewrite хийдэг тул
 * route бүр `[lang]` сегменттэй, кэш нь хэл тус бүрээр тусдаа бичигдэнэ.
 */
export const LOCALES = ['mn', 'en'] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'mn'

export const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' && (LOCALES as readonly string[]).includes(value)

export const toLocale = (value: unknown): Locale => (isLocale(value) ? value : DEFAULT_LOCALE)

/** Дотоод хаягт хэлний угтварыг нэмнэ. Гадаад хаяг, `#` хөндөгдөхгүй. */
export const localeHref = (href: string, locale: Locale = DEFAULT_LOCALE): string => {
  if (locale === DEFAULT_LOCALE || !href.startsWith('/')) return href
  return href === '/' ? `/${locale}` : `/${locale}${href}`
}

/** `/en/news` → `/news`. Rewrite хийгдсэн `/mn/news`-ыг ч адилхан цэвэрлэнэ. */
export const stripLocale = (pathname: string): string => {
  const [, first, ...rest] = pathname.split('/')
  if (!isLocale(first)) return pathname
  return rest.length ? `/${rest.join('/')}` : '/'
}

/** `generateMetadata`-д зориулсан hreflang. */
export const localeAlternates = (path: string) => ({
  languages: Object.fromEntries(
    LOCALES.map((locale) => [locale, localeHref(path, locale)]),
  ) as Record<Locale, string>,
})
