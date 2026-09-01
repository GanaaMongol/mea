import type { Metadata } from 'next'
import Link from 'next/link'

import { NewsCard } from '@/components/blocks/PostsFeed/NewsCard'
import { searchSite } from '@/lib/queries'

export const metadata: Metadata = { title: 'Хайлт' }

type Props = { searchParams: Promise<{ q?: string }> }

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams
  const query = (q ?? '').trim()
  const { posts, links, total } = await searchSite(query)

  return (
    <main className="section section--white news-wrapper">
      <div className="container">
        <div className="news-header news-header--left">
          <p className="title">Хайлт</p>
          <h2>
            {query ? `«${query}»` : 'Хайх үгээ оруулна уу'}
            {query ? ` — ${total} үр дүн` : ''}
          </h2>
        </div>

        {query && total === 0 ? (
          <p className="search-results__empty">
            Илэрц олдсонгүй. Өөр үгээр хайж үзнэ үү.
          </p>
        ) : null}

        {posts.length ? (
          <div className="news-grid">
            {posts.map((hit) => (
              <NewsCard
                key={`${hit.collection}-${hit.doc.id}`}
                post={hit.doc}
                collection={hit.collection}
                variant="plain"
                readLabel="Унших"
              />
            ))}
          </div>
        ) : null}

        {links.length ? (
          <ul className="search-results">
            {links.map((link) => (
              <li key={link.id} className="search-results__item">
                <Link href={link.href} className="search-results__link">
                  <span className="search-results__group">{link.group}</span>
                  <span className="search-results__title">{link.title}</span>
                  {link.excerpt ? (
                    <span className="search-results__excerpt">{link.excerpt}</span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </main>
  )
}
