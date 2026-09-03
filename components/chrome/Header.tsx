import Link from 'next/link'

import type { SiteSetting } from '@/payload-types'
import type { Locale } from '@/lib/i18n'

import { MediaImage } from '@/components/ui/MediaImage'
import { SiteLink } from '@/components/ui/SiteLink'
import { ui } from '@/lib/dictionary'
import { localeHref } from '@/lib/i18n'
import { resolveHref } from '@/lib/links'
import { MenuToggle, SearchButton } from './HeaderActions'
import { HeaderNav, type NavItem } from './HeaderNav'

type Props = {
  header: SiteSetting['header'] | undefined
  locale: Locale
  /** Set once a member is signed in — the login button becomes their account link. */
  account?: { href: string; label: string } | null
}

export function Header({ header, locale, account }: Props) {
  const t = ui(locale)
  // References resolve to URLs here, on the server, where the related documents
  // are already loaded; the nav itself only needs the finished href.
  const items: NavItem[] = (header?.nav ?? []).map((item) => ({
    href: resolveHref(item, locale),
    label: item.label ?? '',
    newTab: Boolean(item.newTab),
  }))

  return (
    <header className="header">
      <div className="container">
        <Link href={localeHref('/', locale)} className="header__logo">
          {header?.logo ? (
            <MediaImage media={header.logo} alt="MEA Logo" priority />
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src="/images/main-logo.jpeg" alt="MEA Logo" width={120} height={36} />
          )}
        </Link>

        <HeaderNav items={items} />

        <div className="header__actions">
          {header?.showSearch ? <SearchButton action={localeHref('/search', locale)} t={t} /> : null}
          {account ? (
            <Link href={account.href} className="btn btn--primary btn--sm">
              {account.label}
            </Link>
          ) : header?.loginLink?.label ? (
            <SiteLink link={header.loginLink} locale={locale} className="btn btn--primary btn--sm" />
          ) : null}
        </div>

        <MenuToggle t={t} />
      </div>
    </header>
  )
}
