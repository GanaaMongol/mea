import type { CollectionConfig } from 'payload'

import { adminsOnly, anyone } from '@/payload/access'
import { layoutBlocks } from '@/payload/blocks'
import { slugField } from '@/payload/fields/slug'
import { revalidateCollection, revalidateCollectionDelete } from '@/payload/hooks/revalidate'

const tierPaths = (doc: Record<string, unknown>) => [
  '/membership',
  `/membership/${typeof doc.slug === 'string' ? doc.slug : ''}`,
]

export const MembershipTiers: CollectionConfig = {
  slug: 'membershipTiers',
  labels: { singular: 'Гишүүнчлэлийн төрөл', plural: 'Гишүүнчлэлийн төрлүүд' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'order'],
    group: 'Агуулга',
  },
  access: {
    read: anyone,
    create: adminsOnly,
    update: adminsOnly,
    delete: adminsOnly,
  },
  defaultSort: 'order',
  hooks: {
    afterChange: [revalidateCollection(tierPaths)],
    afterDelete: [revalidateCollectionDelete(tierPaths)],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    slugField('name'),
    {
      name: 'price',
      type: 'text',
      localized: true,
      admin: { description: 'Жишээ нь "50,000₮ / жил". Чөлөөт текст.' },
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Давуу тал',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          localized: true,
        },
      ],
    },
    {
      name: 'requirements',
      type: 'array',
      label: 'Бүрдүүлэх материал',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          localized: true,
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      admin: { position: 'sidebar' },
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Дэлгэрэнгүй хуудасны хэсгүүд',
      blocks: layoutBlocks,
    },
  ],
}
