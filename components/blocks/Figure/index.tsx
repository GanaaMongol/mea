import type { FigureBlock as FigureProps } from '@/payload-types'

import { MediaImage } from '@/components/ui/MediaImage'

export function Figure({ image, caption, variant }: FigureProps) {
  const map = variant !== 'wide'

  return (
    <section className="section section--warm">
      <div className="container">
        <figure className={map ? 'map-block' : 'figure-block'}>
          <MediaImage
            media={image}
            className={map ? 'map-block__image' : 'figure-block__image'}
            alt={caption ?? ''}
            sizes="(max-width: 900px) 100vw, 900px"
          />
          {caption ? <figcaption className="figure-block__caption">{caption}</figcaption> : null}
        </figure>
      </div>
    </section>
  )
}
