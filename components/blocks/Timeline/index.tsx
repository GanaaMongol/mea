import type { TimelineBlock as TimelineProps } from '@/payload-types'

import { TimelineTabs } from './TimelineTabs'

export function Timeline({ overline, title, items }: TimelineProps) {
  return (
    <section className="about-content">
      <div className="about-content__inner">
        <div className="about-content__section">
          {overline ? <p className="overline">{overline}</p> : null}
          {title ? <h2 className="history-grid__title">{title}</h2> : null}
          {items?.length ? <TimelineTabs items={items} /> : null}
        </div>
      </div>
    </section>
  )
}
