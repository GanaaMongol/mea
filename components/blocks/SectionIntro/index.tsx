import type { SectionIntroBlock as SectionIntroProps } from '@/payload-types'

export function SectionIntro({ title, description }: SectionIntroProps) {
  return (
    <section className="hub-content">
      <div className="hub-content__inner">
        <div className="hub-region-intro">
          <h2 className="hub-region-intro__title">{title}</h2>
          {description ? <p className="hub-region-intro__desc">{description}</p> : null}
        </div>
      </div>
    </section>
  )
}
