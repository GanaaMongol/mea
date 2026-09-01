import type { ValuesListBlock as ValuesListProps } from '@/payload-types'

export function ValuesList({ title, verse, items }: ValuesListProps) {
  return (
    <section className="vision-values">
      <div className="container">
        <div className="vision-values__grid">
          <h2 className="vision-values__title">{title}</h2>
          <div className="vision-values__body">
            {verse ? <blockquote className="vision-values__verse">{verse}</blockquote> : null}
            <ul className="vision-values__list">
              {items?.map((item, index) => (
                <li className="vision-values__item" key={item.id ?? index}>
                  {/* Decorative check mark — a design asset, so it stays in public/. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/vision-check.svg"
                    alt=""
                    aria-hidden="true"
                    width={20}
                    height={20}
                    className="vision-values__check"
                  />
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
