import { localeHref, stripLocale, type Locale } from './i18n'

type Reference = {
  relationTo?: string | null
  value?: unknown
} | null

export type LinkLike = {
  type?: ('reference' | 'custom') | null
  label?: string | null
  url?: string | null
  newTab?: boolean | null
  appearance?: ('default' | 'primary' | 'outline') | null
  reference?: Reference
}

/** Route prefix per collection, so a relationship resolves to a real URL. */
const COLLECTION_PREFIX: Record<string, string> = {
  posts: '/news',
  departments: '/departments',
  hubs: '/hubs',
  membershipTiers: '/membership',
}

/**
 * A hand-typed URL is as often internal ("/about/vision") as external, and an
 * internal one has to carry the locale like any reference does.
 */
const raw = (url: string | null | undefined, locale?: Locale): string => {
  if (!url) return '#'
  return url.startsWith('/') && !url.startsWith('//') ? localeHref(url, locale) : url
}

/**
 * A Payload link group → a real URL. Internal targets get the locale prefix so
 * an English page never links back into the Mongolian tree.
 */
export const resolveHref = (link: LinkLike | null | undefined, locale?: Locale): string => {
  if (!link) return '#'

  if (link.type === 'custom') return raw(link.url, locale)

  const ref = link.reference
  const value = ref?.value
  const slug =
    value && typeof value === 'object' && 'slug' in value
      ? String((value as { slug?: unknown }).slug ?? '')
      : ''

  // A reference row with no document picked still often carries a typed URL.
  if (!ref?.relationTo || !slug) return raw(link.url, locale)

  if (ref.relationTo === 'pages') {
    return localeHref(slug === 'home' ? '/' : `/${slug}`, locale)
  }

  const prefix = COLLECTION_PREFIX[ref.relationTo]
  return localeHref(prefix ? `${prefix}/${slug}` : `/${slug}`, locale)
}

export const linkClassName = (link: LinkLike | null | undefined): string | undefined => {
  switch (link?.appearance) {
    case 'primary':
      return 'btn btn--primary'
    case 'outline':
      return 'btn btn--outline'
    default:
      return undefined
  }
}

/**
 * Header nav only: a top-level item stays lit across its whole area, so
 * "Бидний Тухай" (`/about/vision`) is active on `/about/history` too. Section
 * tabs keep using `isActivePath`, which matches a single page.
 */
export const isActiveSection = (rawHref: string, rawPathname: string): boolean => {
  if (!rawHref.startsWith('/')) return false
  // Both sides carry the locale prefix; strip it so `/en/news` still lights the
  // same nav item as `/news`.
  const href = stripLocale(rawHref)
  const pathname = stripLocale(rawPathname)
  if (href === '/') return pathname === '/'

  const section = href.split('/')[1]
  return Boolean(section) && pathname.split('/')[1] === section
}

/** True when `href` is the current route or one of its ancestors. */
export const isActivePath = (rawHref: string, rawPathname: string): boolean => {
  if (rawHref === '#' || !rawHref.startsWith('/')) return false
  const href = stripLocale(rawHref)
  const pathname = stripLocale(rawPathname)
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}
