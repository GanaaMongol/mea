import type { CardGridBlock as CardGridProps } from '@/payload-types'

import { SectionHeader } from '@/components/blocks/SectionHeader'
import { MediaImage } from '@/components/ui/MediaImage'
import { SiteLink } from '@/components/ui/SiteLink'

const VARIANT = {
  info: { grid: 'info-cards', card: 'info-card' },
  mission: { grid: 'vision-mission__cards', card: 'vision-card' },
  ack: { grid: 'acknowledgment-grid', card: 'acknowledgment-grid__item' },
  step: { grid: 'step-cards', card: 'step-card' },
} as const

export function CardGrid({ variant, header, items, background }: CardGridProps) {
  const style = VARIANT[variant] ?? VARIANT.info

  const cards = items?.map((item, index) => (
    <div className={style.card} key={item.id ?? index}>
      {item.badge ? <span className={`${style.card}__badge`}>{item.badge}</span> : null}
      {item.icon ? (
        <MediaImage media={item.icon} className={`${style.card}__icon`} alt="" />
      ) : null}
      <h3 className={`${style.card}__title`}>{item.title}</h3>
      {item.text ? <p className={`${style.card}__text`}>{item.text}</p> : null}
      {item.link?.label ? (
        <SiteLink link={item.link} className={`${style.card}__link`}>
          {item.link.label} <span>&rarr;</span>
        </SiteLink>
      ) : null}
    </div>
  ))

  /**
   * about-vision.html gives this row its own section, heading classes and a
   * per-card watermark, so it renders from the same fields but its own markup.
   */
  if (variant === 'mission') {
    return (
      <section className="vision-mission">
        <div className="container">
          {header?.title || header?.description ? (
            <div className="vision-mission__header">
              {header.title ? <h2 className="vision-mission__title">{header.title}</h2> : null}
              {header.description ? (
                <p className="vision-mission__desc">{header.description}</p>
              ) : null}
            </div>
          ) : null}
          <div className="vision-mission__cards">
            {items?.map((item, index) => (
              <article className="vision-card" key={item.id ?? index}>
                {/* Decorative watermark — a design asset, so it stays in public/. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/vision-watermark-card.svg"
                  alt=""
                  aria-hidden="true"
                  className="vision-card__watermark"
                />
                {item.icon ? (
                  <MediaImage media={item.icon} className="vision-card__icon" alt="" />
                ) : null}
                <h3 className="vision-card__title">{item.title}</h3>
                {item.text ? <p className="vision-card__text">{item.text}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }

  /**
   * about-history.html puts this grid inside the narrow `about-content` column
   * rather than a full-width section.
   */
  if (variant === 'ack') {
    return (
      <section className="about-content">
        <div className="about-content__inner">
          <div className="about-content__section">
            <SectionHeader header={header} />
            <div className="acknowledgment-grid">
              {items?.map((item, index) => (
                <div className="acknowledgment-grid__item" key={item.id ?? index}>
                  <h3>{item.title}</h3>
                  {item.text ? <p>{item.text}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={background === 'white' ? 'section section--white' : 'section section--warm'}>
      <div className="container">
        {/* membership.html wraps each section in `.content-block` for its 80px rhythm. */}
        <div className={variant === 'step' ? 'content-block' : undefined}>
          <SectionHeader header={header} />
          <div className={style.grid}>{cards}</div>
        </div>
      </div>
    </section>
  )
}
