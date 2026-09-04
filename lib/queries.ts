import 'server-only'

import { draftMode } from 'next/headers'

import type { Where } from 'payload'

import type { Page, SiteSetting } from '@/payload-types'
import type { Article, ArticleCollection } from './postHref'

import { ui } from './dictionary'
import { DEFAULT_LOCALE, localeHref, type Locale } from './i18n'
import { getPayloadClient } from './payload'

export const getPageBySlug = async (
  slug: string,
  locale: Locale = DEFAULT_LOCALE,
): Promise<Page | null> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
    // Every `postsFeed` block on the site uses `source: 'auto'`, which runs
    // its own depth-1 query — no block currently needs a relation's relation
    // resolved, so depth 1 covers direct media/link references at far lower
    // query cost than depth 2.
    depth: 1,
    locale,
    draft,
    overrideAccess: draft,
    pagination: false,
  })

  return docs[0] ?? null
}

/** One document from `posts` or `prayers` — the two share a shape and a template. */
export const getArticleBySlug = async (
  collection: ArticleCollection,
  slug: string,
  locale: Locale = DEFAULT_LOCALE,
): Promise<Article | null> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection,
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
    locale,
    draft,
    overrideAccess: draft,
    pagination: false,
  })

  return docs[0] ?? null
}

/** Slugs for one detail route's `generateStaticParams`. */
export const getArticleSlugs = async (
  collection: ArticleCollection,
): Promise<string[]> => {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection,
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
export const getAuthSettings = async (
  locale: Locale = DEFAULT_LOCALE,
): Promise<SiteSetting['auth'] | null> => {
  try {
    const payload = await getPayloadClient()
    const settings = await payload.findGlobal({ slug: 'siteSettings', depth: 1, locale })
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

export type SearchHit = { collection: ArticleCollection; doc: Article }

export type SearchResults = {
  posts: SearchHit[]
  links: SearchLink[]
  total: number
}

/**
 * Site search. Payload's `like` maps to a case-insensitive match on Postgres, so
 * this is a plain contains-search across the collections a reader can reach —
 * no extra index to keep in sync. `overrideAccess: false` keeps drafts out.
 */
export const searchSite = async (
  query: string,
  locale: Locale = DEFAULT_LOCALE,
): Promise<SearchResults> => {
  const q = query.trim()
  if (!q) return { posts: [], links: [], total: 0 }

  const payload = await getPayloadClient()
  const like = { like: q }
  const common = { limit: 12, depth: 0, locale, pagination: false, overrideAccess: false } as const

  const articleQuery = {
    where: { or: [{ title: like }, { excerpt: like }] } as Where,
    sort: '-publishedAt',
    limit: 24,
    depth: 1,
    locale,
    pagination: false as const,
    overrideAccess: false,
  }

  const [posts, prayers, pages, departments, hubs] = await Promise.all([
    payload.find({ collection: 'posts', ...articleQuery }),
    payload.find({ collection: 'prayers', ...articleQuery }),
    payload.find({ collection: 'pages', where: { title: like }, ...common }),
    payload.find({ collection: 'departments', where: { name: like }, ...common }),
    payload.find({ collection: 'hubs', where: { name: like }, ...common }),
  ])

  const hits: SearchHit[] = [
    ...posts.docs.map((doc) => ({ collection: 'posts' as const, doc })),
    ...prayers.docs.map((doc) => ({ collection: 'prayers' as const, doc })),
  ].sort((a, b) => (b.doc.publishedAt ?? '').localeCompare(a.doc.publishedAt ?? ''))

  const t = ui(locale)
  const links: SearchLink[] = [
    ...pages.docs.map((doc) => ({
      id: `page-${doc.id}`,
      title: doc.title,
      href: localeHref(doc.slug === 'home' ? '/' : `/${doc.slug}`, locale),
      group: t.groupPage,
    })),
    ...departments.docs.map((doc) => ({
      id: `dept-${doc.id}`,
      title: doc.name,
      href: localeHref(`/ministries/${doc.slug}`, locale),
      group: t.groupDepartment,
      excerpt: doc.excerpt,
    })),
    ...hubs.docs.map((doc) => ({
      id: `hub-${doc.id}`,
      title: doc.name,
      href: localeHref(`/hubs/${doc.slug}`, locale),
      group: t.groupHub,
    })),
  ]

  return { posts: hits, links, total: hits.length + links.length }
}
