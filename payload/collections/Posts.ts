import type { CollectionConfig } from 'payload'

import { adminsOnly, publishedOrSignedIn } from '@/payload/access'
import { articleFields } from '@/payload/fields/article'
import { revalidateCollection, revalidateCollectionDelete } from '@/payload/hooks/revalidate'

const postPaths = (doc: Record<string, unknown>) => {
  const slug = typeof doc.slug === 'string' ? doc.slug : ''
  // The home page carries a feed of these too, so it is flushed alongside.
  return ['/', '/news', `/news/${slug}`]
}

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'Мэдээ / Нийтлэл', plural: 'Мэдээ & Нийтлэл' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'kind', 'publishedAt', 'updatedAt'],
    group: 'Агуулга',
  },
  access: {
    read: publishedOrSignedIn,
    create: adminsOnly,
    update: adminsOnly,
    delete: adminsOnly,
  },
  versions: { drafts: true },
  hooks: {
    afterChange: [revalidateCollection(postPaths)],
    afterDelete: [revalidateCollectionDelete(postPaths)],
  },
  fields: articleFields([
    {
      name: 'kind',
      type: 'select',
      required: true,
      defaultValue: 'news',
      options: [
        { label: 'Мэдээ', value: 'news' },
        { label: 'Нийтлэл', value: 'article' },
      ],
      admin: { position: 'sidebar' },
    },
  ]),
}
