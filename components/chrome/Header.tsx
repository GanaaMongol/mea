import Link from 'next/link'

import type { SiteSetting } from '@/payload-types'

import { MediaImage } from '@/components/ui/MediaImage'
import { SiteLink } from '@/components/ui/SiteLink'
import { isActiveSection, resolveHref } from '@/lib/links'
import { MenuToggle, SearchButton } from './HeaderActions'

type Props = {
  header: SiteSetting['header'] | undefined
  pathname: string
  /** Set once a member is signed in — the login button becomes their account link. */
  account?: { href: string; label: string } | null
}

export function Header({ header, pathname, account }: Props) {
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="header__logo">
          {header?.logo ? (
            <MediaImage media={header.logo} alt="MEA Logo" priority />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src="/images/main-logo.jpeg" alt="MEA Logo" width={120} height={36} />
          )}
        </Link>

        <nav className="header__nav">
          {header?.nav?.map((item, index) => {
            const href = resolveHref(item)
            return (
              <SiteLink
                key={item.id ?? index}
                link={item}
                className={isActiveSection(href, pathname) ? 'active' : undefined}
              />
            )
          })}
        </nav>

        <div className="header__actions">
          {header?.showSearch ? <SearchButton /> : null}
          {account ? (
            <Link href={account.href} className="btn btn--primary btn--sm">
              {account.label}
            </Link>
          ) : header?.loginLink?.label ? (
            <SiteLink link={header.loginLink} className="btn btn--primary btn--sm" />
          ) : null}
        </div>

        <MenuToggle />
      </div>
    </header>
  )
}
