import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { getPageBySlug } from '@/lib/queries'

type Search = { [key: string]: string | string[] | undefined }

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug('home')
  if (!page) return {}

  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description ?? undefined,
  }
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<Search>
}) {
  const [page, search] = await Promise.all([getPageBySlug('home'), searchParams])

  if (!page) notFound()

  return (
    <RenderBlocks
      blocks={page.layout}
      pathname="/"
      activeKind={typeof search.kind === 'string' ? search.kind : undefined}
    />
  )
}
