import type { AcceleratorsBlock as AcceleratorsProps } from '@/payload-types'

import { MediaImage } from '@/components/ui/MediaImage'
import { SiteLink } from '@/components/ui/SiteLink'

export function Accelerators({ header, items, numbered }: AcceleratorsProps) {
  return (
    <section className="digital_strategy">
      <div className="container">
        <div className="digital_header">
          {header?.label ? <p className="title">{header.label}</p> : null}
          {header?.title ? <h2>{header.title}</h2> : null}
          {header?.description ? <p>{header.description}</p> : null}
        </div>
        <div className="digital_strategy_container">
          {items?.map((item, index) => (
            <article className="accel-card" key={item.id ?? index}>
              <div className="accel-card__frame">
                <MediaImage
                  media={item.image}
                  className="accel-card__image"
                  alt={item.title}
                  sizes="(max-width: 900px) 50vw, 25vw"
                />
              </div>
              <div className="accel-card__panel">
                {numbered ? (
                  <p className="accel-card__num">{String(index + 1).padStart(2, '0')}</p>
                ) : null}
                <h3 className="accel-card__title">
                  {item.link?.label || item.link?.url || item.link?.reference ? (
                    <SiteLink link={item.link}>{item.title}</SiteLink>
                  ) : (
                    item.title
                  )}
                </h3>
                {item.text ? <p className="accel-card__text">{item.text}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
