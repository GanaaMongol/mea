import 'server-only'

import { draftMode } from 'next/headers'

import type { Page } from '@/payload-types'

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
