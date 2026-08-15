import Link from 'next/link'

import type { SiteSetting } from '@/payload-types'

import { MediaImage } from '@/components/ui/MediaImage'
import { SiteLink } from '@/components/ui/SiteLink'

export function Footer({ footer }: { footer: SiteSetting['footer'] | undefined }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            <Link href="/" className="footer__logo">
              {footer?.logo ? (
                <MediaImage media={footer.logo} alt="MEA" />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src="/images/main-logo.jpeg" alt="MEA" width={170} height={48} />
              )}
            </Link>
            <div className="footer__links-row">
              {footer?.topLinks?.map((link, index) => (
                <SiteLink key={link.id ?? index} link={link} />
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
                    <SiteLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="footer__bottom">
          <p className="footer__copyright">{footer?.copyright}</p>
          {footer?.legalLinks?.map((link, index) => (
            <SiteLink key={link.id ?? index} link={link} className="footer__legal-link" />
          ))}
        </div>
      </div>
    </footer>
  )
}
