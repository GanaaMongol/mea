import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import type { Post } from '@/payload-types'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { PostsFeed } from '@/components/blocks/PostsFeed'
import { MediaImage } from '@/components/ui/MediaImage'
import { getPayloadClient } from '@/lib/payload'

type Params = { slug: string }

const getPost = async (slug: string): Promise<Post | null> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'posts',
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
      collection: 'posts',
      limit: 500,
      depth: 0,
      pagination: false,
      select: { slug: true },
    })
    return docs.map((doc) => ({ slug: doc.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt ?? undefined,
  }
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  return (
    <>
      {post.cover ? (
        <section className="news-detail-hero">
          <MediaImage media={post.cover} alt={post.title} priority sizes="100vw" />
        </section>
      ) : null}

      <section className="news-detail-article">
        <div className="container news-detail-article__inner">
          <h1 className="news-detail-article__title">{post.title}</h1>
          <RenderBlocks blocks={post.layout} pathname={`/news/${post.slug}`} />
        </div>
      </section>

      <PostsFeed
        blockType="postsFeed"
        variant="related"
        source="auto"
        kind="all"
        limit={4}
        readLabel="Унших"
        header={{ title: 'Төстэй мэдээнүүд', align: 'left' }}
      />
    </>
  )
}
