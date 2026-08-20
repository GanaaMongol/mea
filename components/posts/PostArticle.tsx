import type { Post } from '@/payload-types'

import { RenderBlocks } from '@/components/blocks/RenderBlocks'
import { PostsFeed } from '@/components/blocks/PostsFeed'
import { MediaImage } from '@/components/ui/MediaImage'
import { postHref } from '@/lib/postHref'

/**
 * The post body shared by `/news/[slug]` and `/prayer/[slug]`. Only the related
 * strip differs: prayers sit beside prayers, everything else beside news.
 */
export function PostArticle({ post }: { post: Post }) {
  const prayer = post.kind === 'prayer'

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
          <RenderBlocks blocks={post.layout} pathname={postHref(post)} />
        </div>
      </section>

      <PostsFeed
        blockType="postsFeed"
        variant="related"
        source="auto"
        kind={prayer ? 'prayer' : 'newsArticle'}
        limit={4}
        readLabel="Унших"
        header={{ title: prayer ? 'Бусад залбирлууд' : 'Төстэй мэдээнүүд', align: 'left' }}
      />
    </>
  )
}
