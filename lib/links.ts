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

export const resolveHref = (link: LinkLike | null | undefined): string => {
  if (!link) return '#'

  if (link.type === 'custom') return link.url || '#'

  const ref = link.reference
  const value = ref?.value
  const slug =
    value && typeof value === 'object' && 'slug' in value
      ? String((value as { slug?: unknown }).slug ?? '')
      : ''

  if (!ref?.relationTo || !slug) return link.url || '#'

  if (ref.relationTo === 'pages') return slug === 'home' ? '/' : `/${slug}`

  const prefix = COLLECTION_PREFIX[ref.relationTo]
  return prefix ? `${prefix}/${slug}` : `/${slug}`
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

/** True when `href` is the current route or one of its ancestors. */
export const isActivePath = (href: string, pathname: string): boolean => {
  if (href === '/') return pathname === '/'
  if (href === '#' || !href.startsWith('/')) return false
  return pathname === href || pathname.startsWith(`${href}/`)
}
