import Link from 'next/link'

import type { SiteSetting } from '@/payload-types'
import type { Locale } from '@/lib/i18n'

import { MediaImage } from '@/components/ui/MediaImage'
import { SiteLink } from '@/components/ui/SiteLink'
import { localeHref } from '@/lib/i18n'

/**
 * The three marks exported from the Figma footer, kept at the geometry the
 * design gives them: a 24px box for each, with YouTube's glyph inset to 16×11
 * inside that box.
 */
const SOCIAL_ICONS: Record<string, { src: string; width: number; height: number; label: string }> = {
  facebook: { src: '/images/social-facebook.svg', width: 24, height: 24, label: 'Facebook' },
  instagram: { src: '/images/social-instagram.svg', width: 24, height: 24, label: 'Instagram' },
  youtube: { src: '/images/social-youtube.svg', width: 16, height: 11, label: 'YouTube' },
}

export function Footer({
  footer,
  locale,
}: {
  footer: SiteSetting['footer'] | undefined
  locale: Locale
}) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            <Link href={localeHref('/', locale)} className="footer__logo">
              {footer?.logo ? (
                <MediaImage media={footer.logo} alt="MEA" />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src="/images/main-logo.jpeg" alt="MEA" width={170} height={48} />
              )}
            </Link>
            <div className="footer__links-row">
              {footer?.topLinks?.map((link, index) => (
                <SiteLink key={link.id ?? index} link={link} locale={locale} />
              ))}
            </div>
          </div>

          <div>
            <p className="footer__contact-title">{footer?.contact?.title}</p>
            <div className="footer__contact-info">
              {footer?.contact?.items?.map((item, index) =>
                item.href ? (
                  <a key={item.id ?? index} href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  <span key={item.id ?? index}>{item.value}</span>
                ),
              )}
            </div>
          </div>
        </div>

        <nav className="footer__nav">
          {footer?.navGroups?.map((group, index) => (
            <div key={group.id ?? index}>
              <p className="footer__nav-group-title">{group.title}</p>
              <ul className="footer__nav-list">
                {group.links?.map((link, linkIndex) => (
                  <li key={link.id ?? linkIndex}>
                    <SiteLink link={link} locale={locale} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/*
          Three slots so the social row sits dead centre: the copyright and the
          legal links each take an equal share of the leftover width, leaving the
          middle group centred on the footer regardless of their text length.
        */}
        <div className="footer__bottom">
          <p className="footer__copyright flex-1">{footer?.copyright}</p>

          {footer?.socialLinks?.length ? (
            <div className="footer__social">
              {footer.socialLinks.map((item, index) => {
                const icon = SOCIAL_ICONS[item.platform]
                if (!icon) return null

                return (
                  <a
                    key={item.id ?? index}
                    href={item.url}
                    className="footer__social-link"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={icon.label}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={icon.src} alt="" width={icon.width} height={icon.height} />
                  </a>
                )
              })}
            </div>
          ) : null}

          <div className="flex flex-1 justify-end gap-lg">
            {footer?.legalLinks?.map((link, index) => (
              <SiteLink
                key={link.id ?? index}
                link={link}
                locale={locale}
                className="footer__legal-link"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
