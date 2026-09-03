import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { localeAlternates, localeHref, toLocale } from '@/lib/i18n'
import { getPageBySlug } from '@/lib/queries'

export const revalidate = 3600

type Params = { lang: string }
type Search = { [key: string]: string | string[] | undefined }

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const locale = toLocale((await params).lang)
  const page = await getPageBySlug('home', locale)
  if (!page) return {}

  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description ?? undefined,
    alternates: localeAlternates('/'),
  }
}

export default async function HomePage({
  params,
  searchParams,
}: {
  params: Promise<Params>
  searchParams: Promise<Search>
}) {
  const locale = toLocale((await params).lang)
  const [page, search] = await Promise.all([getPageBySlug('home', locale), searchParams])

  if (!page) notFound()

  return (
    <RenderBlocks
      blocks={page.layout}
      locale={locale}
      pathname={localeHref('/', locale)}
      activeKind={typeof search.kind === 'string' ? search.kind : undefined}
    />
  )
}
