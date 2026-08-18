import type { ProcessStepsBlock as ProcessStepsProps } from '@/payload-types'

import { SectionHeader } from '@/components/blocks/SectionHeader'

/** Two steps per row, as in the mockup. */
const rows = <T,>(items: T[]): T[][] =>
  items.reduce<T[][]>((acc, item, index) => {
    if (index % 2 === 0) acc.push([])
    acc[acc.length - 1].push(item)
    return acc
  }, [])

export function ProcessSteps({ header, items }: ProcessStepsProps) {
  if (!items?.length) return null

  return (
    <section className="section section--warm">
      <div className="container">
        <div className="content-block">
          <SectionHeader header={header} />
          <div className="process-steps">
            {rows(items).map((row, rowIndex) => (
              <div className="process-steps__row" key={rowIndex}>
                {row.map((item, index) => (
                  <div className="process-step" key={item.id ?? index}>
                    <div className="process-step__number">
                      {item.number || String(rowIndex * 2 + index + 1)}
                    </div>
                    <p className="process-step__text">{item.text}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
