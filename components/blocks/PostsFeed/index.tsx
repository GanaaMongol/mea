import Link from 'next/link'

import type { Post, PostsFeedBlock as PostsFeedProps } from '@/payload-types'

import { SiteLink } from '@/components/ui/SiteLink'
import { getPayloadClient } from '@/lib/payload'
import { NewsCard } from './NewsCard'

type Props = PostsFeedProps & {
  pathname?: string
  /** The active `kind` filter, taken from the page's query string. */
  activeKind?: string
}

const asPost = (value: number | Post): Post | null =>
  typeof value === 'object' ? value : null

async function loadPosts({
  source,
  manual,
  kind,
  limit,
  activeKind,
}: Pick<Props, 'source' | 'manual' | 'kind' | 'limit' | 'activeKind'>): Promise<Post[]> {
  if (source === 'manual') {
    return (manual ?? []).map(asPost).filter((post): post is Post => Boolean(post))
  }

  // A reader's tab choice overrides the block's configured kind.
  const effectiveKind = activeKind && activeKind !== 'all' ? activeKind : kind

  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'posts',
    where: effectiveKind && effectiveKind !== 'all' ? { kind: { equals: effectiveKind } } : {},
    sort: '-publishedAt',
    limit: limit ?? 4,
    depth: 1,
    pagination: false,
  })

  return docs
}

export async function PostsFeed(props: Props) {
  const { variant, header, filter, moreLink, readLabel, pathname, activeKind } = props
  const posts = await loadPosts(props)
  const bordered = variant === 'bordered'
  const current = activeKind ?? 'all'

  return (
    <section className="section section--white news-wrapper">
      <div className="container">
        <div className={bordered ? 'news-header news-header--left' : 'news-header'}>
          {header?.label ? <p className="title">{header.label}</p> : null}
          {header?.title ? <h2>{header.title}</h2> : null}
          {header?.description ? <p>{header.description}</p> : null}

          {filter?.enabled && filter.style === 'buttons' ? (
            <div className="news-filter">
              {filter.items?.map((item, index) => (
                <Link
                  key={item.id ?? index}
                  href={item.kind === 'all' ? (pathname ?? '/') : `${pathname ?? '/'}?kind=${item.kind}`}
                  className={[
                    'news-filter__btn',
                    item.kind === current ? 'news-filter__btn--active' : null,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        {filter?.enabled && filter.style === 'tabs' ? (
          <div className="cap-tabs cap-tabs--left">
            {filter.items?.map((item, index) => (
              <Link
                key={item.id ?? index}
                href={item.kind === 'all' ? (pathname ?? '/') : `${pathname ?? '/'}?kind=${item.kind}`}
                className={[
                  'cap-tab',
                  item.kind === current ? 'cap-tab--active' : null,
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}

        <div className={bordered ? 'news-grid news-grid--bordered' : 'news-grid'}>
          {posts.map((post) => (
            <NewsCard
              key={post.id}
              post={post}
              variant={bordered ? 'bordered' : 'plain'}
              readLabel={readLabel ?? 'Унших'}
            />
          ))}
        </div>

        {moreLink?.label ? (
          <div className="news-more">
            <SiteLink link={moreLink} className="news-more__link" />
          </div>
        ) : null}
      </div>
    </section>
  )
}
