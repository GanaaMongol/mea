import Link from 'next/link'

import type { Where } from 'payload'

import type { PostsFeedBlock as PostsFeedProps } from '@/payload-types'
import type { Article, ArticleCollection } from '@/lib/postHref'

import { ArrowUpRight } from '@/components/ui/ArrowUpRight'
import { SiteLink } from '@/components/ui/SiteLink'
import { ui } from '@/lib/dictionary'
import { DEFAULT_LOCALE, type Locale } from '@/lib/i18n'
import { getPayloadClient } from '@/lib/payload'
import { NewsCard } from './NewsCard'

type Props = PostsFeedProps & {
  locale?: Locale
  pathname?: string
  /** The active `kind` filter, taken from the page's query string. */
  activeKind?: string
}

const kindWhere = (kind?: string | null): Where =>
  !kind || kind === 'all' ? {} : { kind: { equals: kind } }

async function loadPosts({
  collection,
  source,
  manual,
  kind,
  limit,
  activeKind,
  locale,
}: Pick<
  Props,
  'collection' | 'source' | 'manual' | 'kind' | 'limit' | 'activeKind' | 'locale'
>): Promise<Article[]> {
  if (source === 'manual') {
    // Polymorphic relationship: `{ relationTo, value }`, and `value` is only a
    // document once the query ran with depth.
    return (manual ?? [])
      .filter((item) => item.relationTo === collection)
      .map((item) => item.value)
      .filter((value): value is Article => typeof value === 'object')
  }

  // A reader's tab choice overrides the block's configured kind.
  const effectiveKind = activeKind && activeKind !== 'all' ? activeKind : kind

  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection,
    where: collection === 'prayers' ? {} : kindWhere(effectiveKind),
    sort: '-publishedAt',
    limit: limit ?? 4,
    depth: 1,
    locale,
    pagination: false,
  })

  return docs
}

export async function PostsFeed(props: Props) {
  const { variant, header, filter, moreLink, readLabel, pathname, activeKind } = props
  const locale = props.locale ?? DEFAULT_LOCALE
  const collection = (props.collection ?? 'posts') as ArticleCollection
  const posts = await loadPosts({ ...props, collection })
  const related = variant === 'related'
  const bordered = variant === 'bordered' || related
  // The block's own kind is the tab that's active on a bare URL, so that tab
  // links back to the clean path rather than repeating itself as a query.
  const defaultKind = props.kind ?? 'all'
  const current = activeKind ?? defaultKind
  const tabHref = (kind: string) =>
    kind === defaultKind ? (pathname ?? '/') : `${pathname ?? '/'}?kind=${kind}`
  const showFilter = filter?.enabled && collection === 'posts'

  return (
    <section
      className={
        related
          ? 'section section--white news-wrapper news-detail-related'
          : 'section section--white news-wrapper'
      }
    >
      <div className="container">
        {related ? (
          header?.title ? <h2 className="news-detail-related__title">{header.title}</h2> : null
        ) : (
          <div className={bordered ? 'news-header news-header--left' : 'news-header'}>
            {header?.label ? <p className="title">{header.label}</p> : null}
            {header?.title ? <h2>{header.title}</h2> : null}
            {header?.description ? <p>{header.description}</p> : null}

            {showFilter && filter.style === 'buttons' ? (
              <div className="news-filter">
                {filter.items?.map((item, index) => (
                  <Link
                    key={item.id ?? index}
                    href={tabHref(item.kind)}
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
        )}

        {showFilter && filter.style === 'tabs' ? (
          <div className="cap-tabs cap-tabs--left">
            {filter.items?.map((item, index) => (
              <Link
                key={item.id ?? index}
                href={tabHref(item.kind)}
                className={['cap-tab', item.kind === current ? 'cap-tab--active' : null]
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
              collection={collection}
              variant={bordered ? 'bordered' : 'plain'}
              locale={locale}
              readLabel={readLabel ?? ui(locale).read}
            />
          ))}
        </div>

        {moreLink?.label ? (
          <div className="news-more">
            <SiteLink link={moreLink} locale={locale} className="news-more__link">
              <span className="news-more__label">{moreLink.label}</span>
              <ArrowUpRight className="news-more__icon" />
            </SiteLink>
          </div>
        ) : null}
      </div>
    </section>
  )
}
