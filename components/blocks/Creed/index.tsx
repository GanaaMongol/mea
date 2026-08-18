import type { CreedBlock as CreedProps } from '@/payload-types'

import { MediaImage, asMedia } from '@/components/ui/MediaImage'

export function Creed({ title, intro, background, text }: CreedProps) {
  const parchment = asMedia(background)
  // The scroll artwork sets the panel's shape, so the text always lands on it.
  const ratio =
    parchment?.width && parchment?.height
      ? { aspectRatio: `${parchment.width} / ${parchment.height}` }
      : undefined

  return (
    <section className="about-content">
      <div className="about-content__inner">
        <div className="creed-section">
          <div className="creed-header">
            <h2 className="creed-header__title">{title}</h2>
            {intro ? <p className="creed-header__text">{intro}</p> : null}
          </div>
          <div
            className={parchment ? 'creed-parchment' : 'creed-parchment creed-parchment--plain'}
            style={ratio}
          >
            {parchment ? (
              <div className="creed-parchment__bg">
                <MediaImage media={background} alt="" sizes="(max-width: 900px) 100vw, 816px" />
              </div>
            ) : null}
            <div className="creed-parchment__text">{text}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
