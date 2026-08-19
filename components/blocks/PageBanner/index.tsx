import type { PageBannerBlock as PageBannerProps } from '@/payload-types'

import { MediaImage, asMedia } from '@/components/ui/MediaImage'
import { SiteLink } from '@/components/ui/SiteLink'

/**
 * Class names come straight from `styles.css` so each variant keeps the mockup's
 * appearance; only the content is data.
 */
const VARIANT_CLASS: Record<string, string> = {
  hub: 'hub-banner',
  vision: 'vision-banner',
  dept: 'dept-banner',
  deptDetail: 'dept-detail-banner',
  news: 'news-banner',
  region: 'hub-region-hero',
  imageOnly: 'news-detail-hero',
  // organization.html: ижил hub-banner, зөвхөн градиентийн чиглэл өөр.
  hubGradient: 'hub-banner hub-banner--horizontal',
}

export function PageBanner({
  variant,
  overline,
  title,
  subtitle,
  tag,
  background,
  watermark,
  height,
  align,
  overlay,
  links,
}: PageBannerProps) {
  const classes = VARIANT_CLASS[variant] ?? 'hub-banner'
  // A variant may add a modifier; BEM children always hang off the first class.
  const base = classes.split(' ')[0]
  const backgroundDoc = asMedia(background)

  if (variant === 'imageOnly') {
    return (
      <section className={classes}>
        <MediaImage media={background} priority sizes="100vw" />
      </section>
    )
  }

  if (variant === 'news') {
    return (
      <section className={classes}>
        <div className="container news-banner__inner">
          <div className="news-banner__media">
            <MediaImage media={background} alt={title ?? ''} priority sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="news-banner__text">
            <div className="news-banner__heading">
              {tag ? <span className="news-banner__tag">{tag}</span> : null}
              {title ? <h1 className="news-banner__title">{title}</h1> : null}
            </div>
            {links?.[0] ? <SiteLink link={links[0]} className="news-banner__link" /> : null}
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'region') {
    return (
      <section className={classes}>
        <div className={`${base}__bg`}>
          <MediaImage media={background} priority fill sizes="100vw" />
        </div>
        {overlay ? <div className={`${base}__overlay`} /> : null}
        {watermark ? <MediaImage media={watermark} className={`${base}__wave`} alt="" /> : null}
        <div className={`container ${base}__content`}>
          {overline ? <span className={`${base}__overline`}>{overline}</span> : null}
          {title ? <h1 className={`${base}__title`}>{title}</h1> : null}
        </div>
      </section>
    )
  }

  return (
    <section
      className={classes}
      style={{
        ...(backgroundDoc?.url ? { backgroundImage: `url("${backgroundDoc.url}")` } : {}),
        ...(height ? { height: `${height}px` } : {}),
        ...(align === 'center' ? { textAlign: 'center' } : {}),
      }}
    >
      {/*
        membership.html wraps the watermark in `__bg` — an absolutely positioned,
        centred layer — so the mark sits *behind* the copy. Without that wrapper
        it stayed in the banner's flex flow and pushed the text aside.
      */}
      {watermark ? (
        base === 'hub-banner' ? (
          <div className={`${base}__bg`}>
            <MediaImage media={watermark} className={`${base}__watermark`} alt="" />
          </div>
        ) : (
          <MediaImage media={watermark} className={`${base}__watermark`} alt="" />
        )
      ) : null}
      {/*
        The mockups centre a banner by swapping `.container` for the banner's own
        `__content` box (index.html) and keep `.container` for the left-aligned
        about/department banners. A banner with no copy (membership.html) skips
        the box entirely.
      */}
      {overline || title || subtitle || links?.length ? (
      <div
        className={
          variant === 'vision' || variant === 'hubGradient' || align === 'center'
            ? `${base}__content`
            : 'container'
        }
      >
        {overline ? <p className={`${base}__overline`}>{overline}</p> : null}
        {title ? <h1 className={`${base}__title`}>{title}</h1> : null}
        {subtitle ? <p className={`${base}__subtitle`}>{subtitle}</p> : null}
        {links?.length ? (
          <div className={`${base}__actions`}>
            {links.map((link, index) => (
              <SiteLink key={link.id ?? index} link={link} className="btn--lg" />
            ))}
          </div>
        ) : null}
      </div>
      ) : null}
    </section>
  )
}
