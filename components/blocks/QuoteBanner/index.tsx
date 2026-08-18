import type { QuoteBannerBlock as QuoteBannerProps } from '@/payload-types'

import { MediaImage, asMedia } from '@/components/ui/MediaImage'
import { SiteLink } from '@/components/ui/SiteLink'

/** Each variant is a different section in the mockups, same content shape. */
const VARIANT_CLASS: Record<string, string> = {
  quote: 'quote-banner',
  cta: 'quote-banner',
  dept: 'dept-detail-quote',
  visionGoal: 'vision-goal',
}

export function QuoteBanner({
  variant,
  overline,
  title,
  author,
  background,
  watermark,
  cta,
}: QuoteBannerProps) {
  const backgroundDoc = asMedia(background)
  const base = VARIANT_CLASS[variant ?? 'quote'] ?? 'quote-banner'

  return (
    <section
      className={base}
      style={backgroundDoc?.url ? { backgroundImage: `url("${backgroundDoc.url}")` } : undefined}
    >
      {watermark ? (
        <MediaImage media={watermark} className={`${base}__watermark`} alt="" />
      ) : null}
      <div className={`${base}__content`}>
        {overline ? <p className={`${base}__overline`}>{overline}</p> : null}
        <h2 className={`${base}__title`}>{title}</h2>
        {author ? <p className={`${base}__author`}>{author}</p> : null}
        {cta?.label ? <SiteLink link={cta} className="btn--lg" /> : null}
      </div>
    </section>
  )
}
