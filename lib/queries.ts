import 'server-only'

import { draftMode } from 'next/headers'

import type { Page, SiteSetting } from '@/payload-types'

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
