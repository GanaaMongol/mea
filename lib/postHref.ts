import type { Post } from '@/payload-types'

/**
 * Prayers list on `/prayer` and read on `/prayer/[slug]`; news and articles keep
 * `/news/[slug]`. One post never has two live URLs — each detail route redirects
 * to the other when the kind doesn't match.
 */
export const postHref = (post: Pick<Post, 'kind' | 'slug'>): string =>
  post.kind === 'prayer' ? `/prayer/${post.slug}` : `/news/${post.slug}`
