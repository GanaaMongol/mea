import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import type { Hub } from '@/payload-types'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { getPayloadClient } from '@/lib/payload'

type Params = { slug: string }

const getHub = async (slug: string): Promise<Hub | null> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'hubs',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
    draft,
    overrideAccess: draft,
    pagination: false,
  })

  return docs[0] ?? null
}

export async function generateStaticParams() {
  try {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
      collection: 'hubs',
      limit: 100,
      depth: 0,
      pagination: false,
      select: { slug: true },
    })

    return docs.map((doc) => ({ slug: doc.slug }))
  } catch {
    // The DB may not be reachable during a build; hubs then render on demand.
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const hub = await getHub(slug)
  if (!hub) return {}

  return { title: hub.name }
}

export default async function HubPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const hub = await getHub(slug)

  if (!hub) notFound()

  // The route already knows its path, so the tab row needs no request headers —
  // reading them here would opt the page out of static rendering.
  return <RenderBlocks blocks={hub.layout} pathname={`/hubs/${slug}`} />
}
