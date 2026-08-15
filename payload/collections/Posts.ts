import type { CollectionConfig } from 'payload'

import { adminsOnly, publishedOrSignedIn } from '@/payload/access'
import { layoutBlocks } from '@/payload/blocks'
import { slugField } from '@/payload/fields/slug'
import { revalidateCollection, revalidateCollectionDelete } from '@/payload/hooks/revalidate'

const postPaths = (doc: Record<string, unknown>) => [
  '/news',
  `/news/${typeof doc.slug === 'string' ? doc.slug : ''}`,
]

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
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    slugField(),
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
    {
      name: 'publishedAt',
      type: 'date',
      admin: { position: 'sidebar', date: { pickerAppearance: 'dayOnly' } },
    },
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
      label: 'Нүүр зураг',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      localized: true,
      admin: { description: 'Жагсаалтын картад харагдана.' },
    },
    {
      name: 'body',
      type: 'richText',
      localized: true,
      label: 'Үндсэн текст',
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Нэмэлт хэсгүүд',
      blocks: layoutBlocks,
      admin: { description: 'Текстийн доор нэмэх хэсгүүд (жишээ нь зургийн цомог).' },
    },
  ],
}
