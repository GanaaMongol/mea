import type { MediaCardBlock as MediaCardProps } from '@/payload-types'

import { MediaImage } from '@/components/ui/MediaImage'

export function MediaCard({ title, description, image }: MediaCardProps) {
  return (
    <section className="hub-content">
      <div className="hub-content__inner">
        <div className="org-intro-card">
          {image ? (
            <div className="org-intro-card__bg">
              <MediaImage media={image} alt="" sizes="100vw" />
            </div>
          ) : null}
          <div className="org-intro-card__text">
            <h2 className="org-intro-card__title">{title}</h2>
            {description ? <p className="org-intro-card__desc">{description}</p> : null}
          </div>
        </div>
      </div>
    </section>
  )
}
