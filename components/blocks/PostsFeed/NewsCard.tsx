import Link from 'next/link'

import type { Post } from '@/payload-types'

import { MediaImage } from '@/components/ui/MediaImage'
import { postHref } from '@/lib/postHref'

const KIND_LABEL: Record<string, string> = {
  news: 'Мэдээ',
  article: 'Нийтлэл',
  prayer: 'Залбирал',
}

/** `2026/06/28` — the format the mockups use. */
const formatDate = (value?: string | null) => {
  if (!value) return null
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return null
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${date.getFullYear()}/${month}/${day}`
}

type Props = {
  post: Post
  /** `bordered` keeps the tag above the body; `plain` nests it inside. */
  variant: 'plain' | 'bordered'
  readLabel: string
}

export function NewsCard({ post, variant, readLabel }: Props) {
  const href = postHref(post)
  const tag = KIND_LABEL[post.kind ?? 'news'] ?? post.kind
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
