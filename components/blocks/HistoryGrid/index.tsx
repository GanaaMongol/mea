import type { HistoryGridBlock as HistoryGridProps } from '@/payload-types'

export function HistoryGrid({ overline, title, titleTone, paragraphs }: HistoryGridProps) {
  return (
    <section className="about-content">
      <div className="about-content__inner">
        <div className="about-content__section">
          <div className="history-grid">
            <div>
              {overline ? <p className="overline">{overline}</p> : null}
              <h2
                className={[
                  'history-grid__title',
                  titleTone === 'neutral' ? 'history-grid__title--neutral' : null,
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {title}
              </h2>
            </div>
            <div className="history-grid__body">
              {paragraphs?.map((paragraph, index) => (
                <p className="history-grid__text" key={paragraph.id ?? index}>
                  {paragraph.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
