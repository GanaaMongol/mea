'use client'

import { useState } from 'react'

import type { TimelineBlock } from '@/payload-types'

type Items = NonNullable<TimelineBlock['items']>

/**
 * Figma (node 281:2929): a hairline rail with a dot per year, the years
 * alternating above and below it, and the selected year's lines centred below.
 */
export function TimelineTabs({ items }: { items: Items }) {
  const defaultIndex = Math.max(
    items.findIndex((item) => item.active),
    0,
  )
  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  const active = items[activeIndex] ?? items[0]

  return (
    <div className="timeline">
      <div className="timeline__rail">
        <div className="timeline__points" role="tablist" aria-label="Он цагийн хэлхээс">
          {items.map((item, index) => (
            <button
              type="button"
              role="tab"
              key={item.id ?? index}
              id={`timeline-year-${item.id ?? index}`}
              aria-selected={index === activeIndex}
              aria-controls="timeline-panel"
              className={[
                'timeline__point',
                index === activeIndex ? 'timeline__point--active' : null,
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => setActiveIndex(index)}
            >
              <span className="timeline__year">{item.year}</span>
              <span className="timeline__dot" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
      <div
        className="timeline__desc"
        id="timeline-panel"
        role="tabpanel"
        aria-labelledby={`timeline-year-${active?.id ?? activeIndex}`}
      >
        {active?.lines?.map((line, index) => (
          <p className="timeline__line" key={line.id ?? index}>
            {line.text}
          </p>
        ))}
      </div>
    </div>
  )
}
