import Link from 'next/link'
import type { ComponentProps } from 'react'

import { linkClassName, resolveHref, type LinkLike } from '@/lib/links'

type Props = {
  link: LinkLike | null | undefined
  className?: string
  children?: React.ReactNode
} & Omit<ComponentProps<typeof Link>, 'href' | 'className' | 'children'>

/** Renders a Payload link group as a Next `<Link>`. */
export function SiteLink({ link, className, children, ...rest }: Props) {
  const href = resolveHref(link)
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
