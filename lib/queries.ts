import 'server-only'

import { draftMode } from 'next/headers'

import type { Page, Post, SiteSetting } from '@/payload-types'

import { getPayloadClient } from './payload'

export const getPageBySlug = async (slug: string): Promise<Page | null> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
    draft,
    overrideAccess: draft,
    pagination: false,
  })

  return docs[0] ?? null
}

/** Shared by `/news/[slug]` and `/prayer/[slug]` — the kind picks the route. */
export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
    draft,
    overrideAccess: draft,
    pagination: false,
  })

  return docs[0] ?? null
}

/** Slugs for one detail route's `generateStaticParams`. */
export const getPostSlugs = async (kind: 'prayer' | 'newsArticle'): Promise<string[]> => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'posts',
    where:
      kind === 'prayer'
        ? { kind: { equals: 'prayer' } }
        : { kind: { not_equals: 'prayer' } },
    limit: 500,
    depth: 0,
    pagination: false,
    select: { slug: true },
  })

  return docs.map((doc) => doc.slug).filter((slug): slug is string => Boolean(slug))
}

export const getPageSlugs = async (): Promise<string[]> => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'pages',
    limit: 200,
    depth: 0,
    pagination: false,
    select: { slug: true },
  })

  return docs.map((doc) => doc.slug).filter((slug): slug is string => Boolean(slug))
}

/**
 * `/login` and `/profile` are app UI rather than blocks, so their labels come
 * from this one corner of `siteSettings`. Failing soft keeps the login form
 * usable (on its coded defaults) even if the global has never been saved.
 */
export const getAuthSettings = async (): Promise<SiteSetting['auth'] | null> => {
  try {
    const payload = await getPayloadClient()
    const settings = await payload.findGlobal({ slug: 'siteSettings', depth: 1 })
    return settings.auth ?? null
  } catch (error) {
    console.error('[queries] siteSettings unavailable:', error)
    return null
  }
}

export type SearchLink = {
  id: string
  title: string
  href: string
  group: string
  excerpt?: string | null
}

export type SearchResults = {
  posts: Post[]
  links: SearchLink[]
  total: number
}

/**
 * Site search. Payload's `like` maps to a case-insensitive match on Postgres, so
 * this is a plain contains-search across the collections a reader can reach —
 * no extra index to keep in sync. `overrideAccess: false` keeps drafts out.
 */
export const searchSite = async (query: string): Promise<SearchResults> => {
  const q = query.trim()
  if (!q) return { posts: [], links: [], total: 0 }

  const payload = await getPayloadClient()
  const like = { like: q }
  const common = { limit: 12, depth: 0, pagination: false, overrideAccess: false } as const

  const [posts, pages, departments, hubs] = await Promise.all([
    payload.find({
      collection: 'posts',
      where: { or: [{ title: like }, { excerpt: like }] },
      sort: '-publishedAt',
      limit: 24,
      depth: 1,
      pagination: false,
      overrideAccess: false,
    }),
    payload.find({ collection: 'pages', where: { title: like }, ...common }),
    payload.find({ collection: 'departments', where: { name: like }, ...common }),
    payload.find({ collection: 'hubs', where: { name: like }, ...common }),
  ])

  const links: SearchLink[] = [
    ...pages.docs.map((doc) => ({
      id: `page-${doc.id}`,
      title: doc.title,
      href: doc.slug === 'home' ? '/' : `/${doc.slug}`,
      group: 'Хуудас',
    })),
    ...departments.docs.map((doc) => ({
      id: `dept-${doc.id}`,
      title: doc.name,
      href: `/ministries/${doc.slug}`,
      group: 'Үйлчлэлийн алба',
      excerpt: doc.excerpt,
    })),
    ...hubs.docs.map((doc) => ({
      id: `hub-${doc.id}`,
      title: doc.name,
      href: `/hubs/${doc.slug}`,
      group: 'ХАБ',
    })),
  ]

  return { posts: posts.docs, links, total: posts.docs.length + links.length }
}
