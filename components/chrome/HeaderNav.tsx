'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { isActiveSection } from '@/lib/links'

export type NavItem = { href: string; label: string; newTab?: boolean }

/**
 * Client-side on purpose. The header lives in the root layout, and App Router
 * keeps a shared layout mounted across navigations — so the request header the
 * layout reads (`x-pathname`) only updates on a full page load, leaving the
 * highlight stuck on whichever page was loaded first. `usePathname()` follows
 * every client navigation.
 */
export function HeaderNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname()

  return (
    <nav className="header__nav">
      {items.map((item, index) => (
        <Link
          key={`${item.href}-${index}`}
          href={item.href}
          className={isActiveSection(item.href, pathname) ? 'active' : undefined}
          {...(item.newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
