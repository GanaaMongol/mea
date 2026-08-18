import type { BoardMember, PeopleGridBlock as PeopleGridProps } from '@/payload-types'

import { MediaImage } from '@/components/ui/MediaImage'
import { getPayloadClient } from '@/lib/payload'

const asPerson = (value: number | BoardMember): BoardMember | null =>
  typeof value === 'object' ? value : null

async function loadPeople({
  source,
  group,
  people,
  limit,
}: Pick<PeopleGridProps, 'source' | 'group' | 'people' | 'limit'>): Promise<BoardMember[]> {
  if (source === 'manual') {
    return (people ?? []).map(asPerson).filter((person): person is BoardMember => Boolean(person))
  }

  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'boardMembers',
    where: group ? { group: { equals: group } } : {},
    sort: 'order',
    limit: limit ?? 12,
    depth: 1,
    pagination: false,
  })

  return docs
}

export async function PeopleGrid(props: PeopleGridProps) {
  const { title, description } = props
  const people = await loadPeople(props)

  if (!people.length) return null

  return (
    <section className="about-content about-content--tight">
      <div className="about-content__inner">
        <div className="people-grid">
          <div className="people-grid__body">
            {title || description ? (
              <div className="people-grid__header">
                {title ? <h3 className="people-grid__title">{title}</h3> : null}
                {description ? <p className="people-grid__desc">{description}</p> : null}
              </div>
            ) : null}
            <div className="board-grid">
              {people.map((person) => (
                <article className="board-card" key={person.id}>
                  <div className="board-card__photo">
                    <MediaImage media={person.photo} alt={person.name} sizes="240px" />
                  </div>
                  <div className="board-card__info">
                    <h4 className="board-card__name">{person.name}</h4>
                    {person.role ? <p className="board-card__role">{person.role}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
