import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { notFound } from 'next/navigation'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { getPageBySlug, getPageSlugs } from '@/lib/queries'

type Params = { slug: string[] }

export async function generateStaticParams() {
  try {
    const slugs = await getPageSlugs()
    return slugs
      .filter((slug) => slug !== 'home')
      .map((slug) => ({ slug: slug.split('/') }))
  } catch {
    // The DB may not be reachable during a build; pages then render on demand.
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(slug.join('/'))
  if (!page) return {}

  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description ?? undefined,
  }
}

export default async function CatchAllPage({ params }: { params: Promise<Params> }) {
  const [{ slug }, headerList] = await Promise.all([params, headers()])
  const page = await getPageBySlug(slug.join('/'))

  if (!page) notFound()

  return (
    <RenderBlocks blocks={page.layout} pathname={headerList.get('x-pathname') ?? '/'} />
  )
}
