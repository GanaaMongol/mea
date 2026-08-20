'use client'

import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import styles from './PrayerNavLink.module.css'

/**
 * Prayers are `posts` with `kind: 'prayer'`, so they need no collection of their
 * own — this is the same list view, pre-filtered and date-sorted. Payload can
 * only mount extra nav links after the groups, never inside one, so it sits
 * below the last group rather than under "Мэдээ & Нийтлэл".
 *
 * The admin route is hardcoded rather than read from `useConfig()`: this file is
 * bundled separately from `@payloadcms/ui`, so its React context comes back
 * undefined here. `payload.config.ts` leaves `routes.admin` at its default.
 */
const LIST_PATH = '/admin/collections/posts'
const FILTER = 'where[kind][equals]'

export function PrayerNavLink() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isActive = pathname === LIST_PATH && searchParams.get(FILTER) === 'prayer'

  return (
    <div className={styles.wrap}>
      <Link
        className="nav__link"
        href={`${LIST_PATH}?${FILTER}=prayer&sort=-publishedAt`}
        id="nav-posts-prayer"
        prefetch={false}
      >
        {isActive ? <div className="nav__link-indicator" /> : null}
        <span className="nav__link-label">Залбирал</span>
      </Link>
    </div>
  )
}
