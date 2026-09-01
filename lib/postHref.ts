import type { Post, Prayer } from '@/payload-types'

export type ArticleCollection = 'posts' | 'prayers'
/** A `posts` or `prayers` document — same shape, different collection. */
export type Article = Post | Prayer

/** `posts` read on `/news/[slug]`, `prayers` on `/prayer/[slug]`. */
export const articleHref = (
  doc: Pick<Article, 'slug'>,
  collection: ArticleCollection,
): string => (collection === 'prayers' ? `/prayer/${doc.slug}` : `/news/${doc.slug}`)
