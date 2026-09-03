import type { Metadata } from 'next'
import Link from 'next/link'

import { NewsCard } from '@/components/blocks/PostsFeed/NewsCard'
import { ui } from '@/lib/dictionary'
import { toLocale } from '@/lib/i18n'
import { searchSite } from '@/lib/queries'

type Props = {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ q?: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: ui(toLocale((await params).lang)).searchTitle }
}

export default async function SearchPage({ params, searchParams }: Props) {
  const [{ lang }, { q }] = await Promise.all([params, searchParams])
  const locale = toLocale(lang)
  const t = ui(locale)
  const query = (q ?? '').trim()
  const { posts, links, total } = await searchSite(query, locale)

  return (
    <main className="section section--white news-wrapper">
      <div className="container">
        <div className="news-header news-header--left">
          <p className="title">{t.searchTitle}</p>
          <h2>
            {query ? `«${query}»` : t.searchPrompt}
            {query ? ` — ${total} ${t.searchResults}` : ''}
          </h2>
        </div>

        {query && total === 0 ? (
          <p className="search-results__empty">{t.searchEmpty}</p>
        ) : null}

        {posts.length ? (
          <div className="news-grid">
            {posts.map((hit) => (
              <NewsCard
                key={`${hit.collection}-${hit.doc.id}`}
                post={hit.doc}
                collection={hit.collection}
                variant="plain"
                locale={locale}
                readLabel={t.read}
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
