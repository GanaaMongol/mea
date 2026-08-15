import type { SiteSetting } from '@/payload-types'

import { SiteLink } from '@/components/ui/SiteLink'
import { LanguageSelector } from './LanguageSelector'

type Props = {
  announcement: SiteSetting['announcement'] | undefined
  locale: string
}

export function AnnouncementBar({ announcement, locale }: Props) {
  if (!announcement?.enabled) return null

  return (
    <div className="announcement-bar">
      <div className="container">
        <p className="announcement-bar__text">
          {announcement.text}
          {announcement.cta?.label ? <SiteLink link={announcement.cta} /> : null}
        </p>
      </div>
      <div className="right-container">
        <ul className="announcement-bar__links">
          {announcement.links?.map((link, index) => (
            <li key={link.id ?? index}>
              <SiteLink link={link} />
            </li>
          ))}
          {announcement.showLanguageSwitcher ? <LanguageSelector locale={locale} /> : null}
        </ul>
      </div>
    </div>
  )
}
