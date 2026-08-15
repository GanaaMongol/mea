import type { CollectionConfig } from 'payload'

import { adminsOnly, publishedOrSignedIn } from '@/payload/access'
import { layoutBlocks } from '@/payload/blocks'
import { slugField } from '@/payload/fields/slug'
import { revalidateCollection, revalidateCollectionDelete } from '@/payload/hooks/revalidate'

const pagePaths = (doc: Record<string, unknown>) => {
  const slug = typeof doc.slug === 'string' ? doc.slug : ''
  return [slug === 'home' ? '/' : `/${slug}`]
}

/**
 * Every static page in the site. The page is not built in code — an editor
 * assembles it from `layout` blocks, and `app/(frontend)/[...slug]` renders it.
 */
export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: { singular: 'Хуудас', plural: 'Хуудсууд' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: 'Агуулга',
  },
  access: {
    read: publishedOrSignedIn,
    create: adminsOnly,
    update: adminsOnly,
    delete: adminsOnly,
  },
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [revalidateCollection(pagePaths)],
    afterDelete: [revalidateCollectionDelete(pagePaths)],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    slugField(),
    {
      name: 'layout',
      type: 'blocks',
      label: 'Хуудасны хэсгүүд',
      blocks: layoutBlocks,
      admin: {
        description: 'Хэсэг нэмэх, чирж дараалал солих, устгах боломжтой.',
      },
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO',
      admin: { position: 'sidebar' },
      fields: [
        { name: 'title', type: 'text', localized: true },
        { name: 'description', type: 'textarea', localized: true },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
