import Link from 'next/link'

import type { Department, DepartmentGridBlock as DepartmentGridProps } from '@/payload-types'

import { MediaImage } from '@/components/ui/MediaImage'
import { getPayloadClient } from '@/lib/payload'

const asDepartment = (value: number | Department): Department | null =>
  typeof value === 'object' ? value : null

/** Four to a row, so each row expands on hover like the home page's accelerators. */
const chunk = <T,>(items: T[], size: number): T[][] =>
  items.reduce<T[][]>((rows, item, index) => {
    if (index % size === 0) rows.push([])
    rows[rows.length - 1].push(item)
    return rows
  }, [])

async function loadDepartments({
  source,
  manual,
  limit,
}: Pick<DepartmentGridProps, 'source' | 'manual' | 'limit'>): Promise<Department[]> {
  if (source === 'manual') {
    return (manual ?? []).map(asDepartment).filter((doc): doc is Department => Boolean(doc))
  }

  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'departments',
    sort: 'order',
    limit: limit ?? 12,
    depth: 1,
    pagination: false,
  })

  return docs
}

export async function DepartmentGrid(props: DepartmentGridProps) {
  const { header } = props
  const departments = await loadDepartments(props)

  if (!departments.length) return null

  return (
    <section className="hub-content">
      <div className="hub-content__inner">
        {header?.title || header?.description ? (
          <div className="org-section-header">
            {header.title ? <h2 className="org-section-header__title">{header.title}</h2> : null}
            {header.description ? (
              <p className="org-section-header__desc">{header.description}</p>
            ) : null}
          </div>
        ) : null}
        {chunk(departments, 4).map((row, rowIndex) => (
          <div className="accel-row" key={rowIndex}>
            {row.map((department) => (
              <article className="accel-card" key={department.id}>
                <div className="accel-card__frame">
                  <MediaImage
                    media={department.image}
                    className="accel-card__image"
                    alt={department.name}
                    sizes="(max-width: 900px) 50vw, 25vw"
                  />
                </div>
                <div className="accel-card__panel">
                  <h3 className="accel-card__title">
                    <Link href={`/departments/${department.slug}`}>{department.name}</Link>
                  </h3>
                  {department.excerpt ? (
                    <p className="accel-card__text">{department.excerpt}</p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
