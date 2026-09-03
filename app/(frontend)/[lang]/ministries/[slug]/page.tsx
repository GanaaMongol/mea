import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import type { Department } from '@/payload-types'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { DEFAULT_LOCALE, localeAlternates, localeHref, toLocale, type Locale } from '@/lib/i18n'
import { getPayloadClient } from '@/lib/payload'

export const revalidate = 3600

type Params = { lang: string; slug: string }

const getDepartment = async (slug: string, locale: Locale = DEFAULT_LOCALE): Promise<Department | null> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'departments',
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
  const { lang, slug } = await params
  const department = await getDepartment(slug, toLocale(lang))
  if (!department) return {}

  return { title: department.name, alternates: localeAlternates(`/ministries/${slug}`) }
}

export default async function MinistryPage({ params }: { params: Promise<Params> }) {
  const { lang, slug } = await params
  const locale = toLocale(lang)
  const department = await getDepartment(slug, locale)

  if (!department) notFound()

  return (
    <RenderBlocks
      blocks={department.layout}
      locale={locale}
      pathname={localeHref(`/ministries/${slug}`, locale)}
    />
  )
}
