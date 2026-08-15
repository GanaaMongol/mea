import type { QuoteBannerBlock as QuoteBannerProps } from '@/payload-types'

import { asMedia } from '@/components/ui/MediaImage'
import { SiteLink } from '@/components/ui/SiteLink'

export function QuoteBanner({
  variant,
  overline,
  title,
  author,
  background,
  cta,
}: QuoteBannerProps) {
  const backgroundDoc = asMedia(background)
  const base = variant === 'dept' ? 'dept-detail-quote' : 'quote-banner'

  return (
    <section
      className={base}
      style={backgroundDoc?.url ? { backgroundImage: `url("${backgroundDoc.url}")` } : undefined}
    >
      <div className={`${base}__content`}>
        {overline ? <p className={`${base}__overline`}>{overline}</p> : null}
        <h2 className={`${base}__title`}>{title}</h2>
        {author ? <p className={`${base}__author`}>{author}</p> : null}
        {cta?.label ? <SiteLink link={cta} className="btn--lg" /> : null}
      </div>
    </section>
  )
}
