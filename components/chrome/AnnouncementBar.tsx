import type { SiteSetting } from '@/payload-types'
import type { Locale } from '@/lib/i18n'

import { SiteLink } from '@/components/ui/SiteLink'
import { LanguageSelector } from './LanguageSelector'

type Props = {
  announcement: SiteSetting['announcement'] | undefined
  locale: Locale
}

export function AnnouncementBar({ announcement, locale }: Props) {
  if (!announcement?.enabled) return null

  return (
    <div className="announcement-bar">
      <div className="container">
        <p className="announcement-bar__text">
          {announcement.text}
          {announcement.cta?.label ? <SiteLink link={announcement.cta} locale={locale} /> : null}
        </p>
      </div>
      <div className="right-container">
        <ul className="announcement-bar__links">
          {announcement.links?.map((link, index) => (
            <li key={link.id ?? index}>
              <SiteLink link={link} locale={locale} />
            </li>
          ))}
          {announcement.showLanguageSwitcher ? <LanguageSelector locale={locale} /> : null}
        </ul>
      </div>
    </div>
  )
}
