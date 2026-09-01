import Link from 'next/link'

import type { Article, ArticleCollection } from '@/lib/postHref'

import { MediaImage } from '@/components/ui/MediaImage'
import { articleHref } from '@/lib/postHref'

const KIND_LABEL: Record<string, string> = {
  news: 'Мэдээ',
  article: 'Нийтлэл',
}

/** `2026/06/28` — the format the mockups use. Parse in UTC to avoid timezone hydration mismatches. */
const formatDate = (value?: string | null) => {
  if (!value) return null
  // Parse ISO string in UTC by appending Z if not present
  const isoString = typeof value === 'string' && !value.endsWith('Z') ? `${value}Z` : value
  const date = new Date(isoString)
  if (Number.isNaN(date.getTime())) return null
  // Use UTC getters to ensure server and client produce identical output
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const day = String(date.getUTCDate()).padStart(2, '0')
  return `${date.getUTCFullYear()}/${month}/${day}`
}

type Props = {
  post: Article
  collection: ArticleCollection
  /** `bordered` keeps the tag above the body; `plain` nests it inside. */
  variant: 'plain' | 'bordered'
  readLabel: string
}

export function NewsCard({ post, collection, variant, readLabel }: Props) {
  const href = articleHref(post, collection)
  // Prayers have no kind of their own — the collection is the category.
  const tag =
    collection === 'prayers'
      ? 'Залбирал'
      : (KIND_LABEL[('kind' in post && post.kind) || 'news'] ?? 'Мэдээ')
  const date = formatDate(post.publishedAt)

  const tagEl = <span className="news-card__tag">{tag}</span>

  return (
    <article className="news-card">
      <div className="news-card__image">
        <Link href={href}>
          <MediaImage
            media={post.cover}
            alt={post.title}
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
          />
        </Link>
      </div>
      {variant === 'bordered' ? tagEl : null}
      <div className="news-card__body">
        {variant === 'plain' ? tagEl : null}
        <div className="news-card__body_wrap">
          <h3 className="news-card__title">
            <Link href={href}>{post.title}</Link>
          </h3>
          {post.excerpt ? <p className="news-card__excerpt">{post.excerpt}</p> : null}
        </div>
        <div className="news-card__footer">
          {date ? <span className="news-card__date">{date}</span> : null}
          <div className="news-card__read_wrap">
            <Link href={href} className="news-card__read">
              {readLabel}
            </Link>
            {/* Decorative chevron — a design asset, so it stays in public/. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/arrow.svg" alt="" className="news-card__arrow" />
          </div>
        </div>
      </div>
    </article>
  )
}
