import type { StatsRowBlock as StatsRowProps } from '@/payload-types'

export function StatsRow({ items }: StatsRowProps) {
  return (
    <section className="about-content">
      <div className="about-content__inner">
        <div className="about-content__section">
          <div className="stats-row">
            {items?.map((item, index) => (
              <div className="stat" key={item.id ?? index}>
                <p className="stat__number">{item.number}</p>
                <p className="stat__label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
