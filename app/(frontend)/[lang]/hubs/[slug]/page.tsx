import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import type { Hub } from '@/payload-types'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { DEFAULT_LOCALE, localeAlternates, localeHref, toLocale, type Locale } from '@/lib/i18n'
import { getPayloadClient } from '@/lib/payload'

export const revalidate = 3600

type Params = { lang: string; slug: string }

const getHub = async (slug: string, locale: Locale = DEFAULT_LOCALE): Promise<Hub | null> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'hubs',
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
  const { lang, slug } = await params
  const hub = await getHub(slug, toLocale(lang))
  if (!hub) return {}

  return { title: hub.name, alternates: localeAlternates(`/hubs/${slug}`) }
}

export default async function HubPage({ params }: { params: Promise<Params> }) {
  const { lang, slug } = await params
  const locale = toLocale(lang)
  const hub = await getHub(slug, locale)

  if (!hub) notFound()

  // The route already knows its path, so the tab row needs no request headers —
  // reading them here would opt the page out of static rendering.
  return (
    <RenderBlocks
      blocks={hub.layout}
      locale={locale}
      pathname={localeHref(`/hubs/${slug}`, locale)}
    />
  )
}
