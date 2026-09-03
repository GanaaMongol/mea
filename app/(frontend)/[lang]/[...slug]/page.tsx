import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { localeAlternates, localeHref, toLocale } from '@/lib/i18n'
import { getPageBySlug, getPageSlugs } from '@/lib/queries'

export const revalidate = 3600

type Params = { lang: string; slug: string[] }
type Search = { [key: string]: string | string[] | undefined }

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
  const { lang, slug } = await params
  const path = `/${slug.join('/')}`
  const page = await getPageBySlug(slug.join('/'), toLocale(lang))
  if (!page) return {}

  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description ?? undefined,
    alternates: localeAlternates(path),
  }
}

export default async function CatchAllPage({
  params,
  searchParams,
}: {
  params: Promise<Params>
  searchParams: Promise<Search>
}) {
  const [{ lang, slug }, search] = await Promise.all([params, searchParams])
  const locale = toLocale(lang)
  const page = await getPageBySlug(slug.join('/'), locale)

  if (!page) notFound()

  const kind = typeof search.kind === 'string' ? search.kind : undefined

  // The route already knows its own path, so the tab rows need no request
  // headers — reading them would opt the page out of static rendering.
  return (
    <RenderBlocks
      blocks={page.layout}
      locale={locale}
      pathname={localeHref(`/${slug.join('/')}`, locale)}
      activeKind={kind}
    />
  )
}
