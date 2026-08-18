'use client'

import { useState } from 'react'

import type { TimelineBlock } from '@/payload-types'

type Items = NonNullable<TimelineBlock['items']>

/**
 * The year row is a tab list: picking a year swaps the panel below it. The
 * default year comes from the block, so the server render already shows content.
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
      <div className="timeline__track" role="tablist">
        {items.map((item, index) => (
          <button
            type="button"
            role="tab"
            id={`timeline-year-${item.id ?? index}`}
            aria-selected={index === activeIndex}
            aria-controls="timeline-panel"
            key={item.id ?? index}
            className={[
              'timeline__year',
              index === activeIndex ? 'timeline__year--active' : null,
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => setActiveIndex(index)}
          >
            {item.year}
          </button>
        ))}
      </div>
      <div
        className="timeline__content timeline__content--single"
        id="timeline-panel"
        role="tabpanel"
        aria-labelledby={`timeline-year-${active?.id ?? activeIndex}`}
      >
        <article className="timeline__panel">
          <h3 className="timeline__item-title">{active?.title}</h3>
          {active?.text ? <p className="timeline__item-text">{active.text}</p> : null}
        </article>
      </div>
    </div>
  )
}
