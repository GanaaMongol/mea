import type { CardGridBlock as CardGridProps } from '@/payload-types'

import { SectionHeader } from '@/components/blocks/SectionHeader'
import { MediaImage } from '@/components/ui/MediaImage'
import { SiteLink } from '@/components/ui/SiteLink'

const VARIANT = {
  info: { grid: 'info-cards', card: 'info-card' },
  mission: { grid: 'vision-mission__cards', card: 'vision-mission__card' },
  ack: { grid: 'acknowledgment-grid', card: 'acknowledgment-grid__item' },
  step: { grid: 'step-cards', card: 'step-card' },
} as const

export function CardGrid({ variant, header, items, background }: CardGridProps) {
  const style = VARIANT[variant] ?? VARIANT.info

  return (
    <section className={background === 'white' ? 'section section--white' : 'section section--warm'}>
      <div className="container">
        <SectionHeader header={header} />
        <div className={style.grid}>
          {items?.map((item, index) => (
            <div className={style.card} key={item.id ?? index}>
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
          ))}
        </div>
      </div>
    </section>
  )
}
