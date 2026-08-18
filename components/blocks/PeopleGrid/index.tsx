import type { BoardMember, PeopleGridBlock as PeopleGridProps } from '@/payload-types'

import { MediaImage } from '@/components/ui/MediaImage'
import { getPayloadClient } from '@/lib/payload'

const asPerson = (value: number | BoardMember): BoardMember | null =>
  typeof value === 'object' ? value : null

async function loadPeople({
  source,
  group,
  hub,
  people,
  limit,
}: Pick<PeopleGridProps, 'source' | 'group' | 'hub' | 'people' | 'limit'>): Promise<BoardMember[]> {
  if (source === 'manual') {
    return (people ?? []).map(asPerson).filter((person): person is BoardMember => Boolean(person))
  }

  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'boardMembers',
    where: {
      ...(group ? { group: { equals: group } } : {}),
      // A region grid is per hub, so only that hub's people show up.
      ...(hub ? { hub: { equals: typeof hub === 'object' ? hub.id : hub } } : {}),
    },
    sort: 'order',
    limit: limit ?? 12,
    depth: 1,
    pagination: false,
  })

  return docs
}

export async function PeopleGrid(props: PeopleGridProps) {
  const { variant, title, description } = props
  const people = await loadPeople(props)

  if (!people.length) return null

  /** hub-ulaanbaatar.html: full-width four-up grid with borderless cards. */
  if (variant === 'regionTeam') {
    return (
      <section className="hub-content">
        <div className="hub-content__inner">
          <div className="team-section hub-region-team">
            {title ? <h2 className="team-section__title">{title}</h2> : null}
            {description ? <p className="hub-region-team__desc">{description}</p> : null}
            <div className="hub-region-team-grid">
              {people.map((person) => (
                <article className="hub-region-team-card" key={person.id}>
                  <div className="hub-region-team-card__photo">
                    <MediaImage media={person.photo} alt={person.name} sizes="(max-width: 1024px) 50vw, 25vw" />
                  </div>
                  <p className="hub-region-team-card__name">{person.name}</p>
                  {person.role ? <p className="hub-region-team-card__role">{person.role}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

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
