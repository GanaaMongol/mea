import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import type { Department } from '@/payload-types'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { getPayloadClient } from '@/lib/payload'

export const revalidate = 3600

type Params = { slug: string }

const getDepartment = async (slug: string): Promise<Department | null> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'departments',
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
      collection: 'departments',
      limit: 100,
      depth: 0,
      pagination: false,
      select: { slug: true },
    })

    return docs.map((doc) => ({ slug: doc.slug }))
  } catch {
    // The DB may not be reachable during a build; ministries render on demand.
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const department = await getDepartment(slug)
  if (!department) return {}

  return { title: department.name }
}

export default async function MinistryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const department = await getDepartment(slug)

  if (!department) notFound()

  return <RenderBlocks blocks={department.layout} pathname={`/ministries/${slug}`} />
}
