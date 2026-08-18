import type { TimelineBlock as TimelineProps } from '@/payload-types'

/**
 * The design system styles the years as a tab track above a grid of milestones
 * (`timeline__track` / `timeline__content`), so the year list and the cards are
 * two rows built from the same items.
 */
export function Timeline({ overline, title, items }: TimelineProps) {
  return (
    <section className="about-content">
      <div className="about-content__inner">
        <div className="about-content__section">
          {overline ? <p className="overline">{overline}</p> : null}
          {title ? <h2 className="history-grid__title">{title}</h2> : null}
          <div className="timeline">
            <div className="timeline__track">
              {items?.map((item, index) => (
                <span
                  className={['timeline__year', item.active ? 'timeline__year--active' : null]
                    .filter(Boolean)
                    .join(' ')}
                  key={item.id ?? index}
                >
                  {item.year}
                </span>
              ))}
            </div>
            <div className="timeline__content">
              {items?.map((item, index) => (
                <article key={item.id ?? index}>
                  <h3 className="timeline__item-title">{item.title}</h3>
                  {item.text ? <p className="timeline__item-text">{item.text}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
