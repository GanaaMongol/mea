import Link from 'next/link'
import type { ComponentProps } from 'react'

import type { Locale } from '@/lib/i18n'

import { linkClassName, resolveHref, type LinkLike } from '@/lib/links'

type Props = {
  link: LinkLike | null | undefined
  className?: string
  children?: React.ReactNode
  /** Keeps an internal target inside the locale the page is rendered in. */
  locale?: Locale
} & Omit<ComponentProps<typeof Link>, 'href' | 'className' | 'children'>

/** Renders a Payload link group as a Next `<Link>`. */
export function SiteLink({ link, className, children, locale, ...rest }: Props) {
  const href = resolveHref(link, locale)
  const classes = [linkClassName(link), className].filter(Boolean).join(' ') || undefined

  return (
    <Link
      href={href}
      className={classes}
      {...(link?.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children ?? link?.label}
    </Link>
  )
}
