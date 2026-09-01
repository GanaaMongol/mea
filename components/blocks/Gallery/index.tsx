import type { GalleryBlock as GalleryProps } from '@/payload-types'

import { MediaImage } from '@/components/ui/MediaImage'

export function Gallery({ variant, items }: GalleryProps) {
  if (!items?.length) return null

  if (variant === 'carousel') {
    return (
      <div className="hub-carousel">
        <div className="hub-carousel__track">
          {items.map((item, index) => (
            <div className="hub-carousel__slide" key={item.id ?? index}>
              <MediaImage media={item.image} alt={item.caption ?? ''} sizes="(max-width: 900px) 100vw, 33vw" />
              {item.caption ? <p className="hub-carousel__caption">{item.caption}</p> : null}
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (variant === 'grid') {
    return (
      <div className="news-detail-article__gallery-row">
        {items.map((item, index) => (
          <div className="news-detail-article__gallery-item" key={item.id ?? index}>
            <MediaImage media={item.image} alt={item.caption ?? ''} sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
        ))}
      </div>
    )
  }

  // mosaic: first image full width, the rest in a row underneath
  const [main, ...rest] = items

  return (
    <div className="news-detail-article__gallery">
      <div className="news-detail-article__gallery-main">
        <MediaImage media={main.image} alt={main.caption ?? ''} sizes="100vw" />
      </div>
      {rest.length ? (
        <div className="news-detail-article__gallery-row">
          {rest.map((item, index) => (
            <div className="news-detail-article__gallery-item" key={item.id ?? index}>
              <MediaImage media={item.image} alt={item.caption ?? ''} sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
