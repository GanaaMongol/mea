import type { CollectionConfig } from 'payload'

import { adminsOnly, publishedOrSignedIn } from '@/payload/access'
import { layoutBlocks } from '@/payload/blocks'
import { slugField } from '@/payload/fields/slug'
import { revalidateCollection, revalidateCollectionDelete } from '@/payload/hooks/revalidate'

const departmentPaths = (doc: Record<string, unknown>) => [
  '/departments',
  `/departments/${typeof doc.slug === 'string' ? doc.slug : ''}`,
]

/** Үйлчлэлийн Албад — `departments.html` + `department-detail.html`. */
export const Departments: CollectionConfig = {
  slug: 'departments',
  labels: { singular: 'Алба', plural: 'Үйлчлэлийн албад' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'lead', 'order', 'updatedAt'],
    group: 'Агуулга',
  },
  access: {
    read: publishedOrSignedIn,
    create: adminsOnly,
    update: adminsOnly,
    delete: adminsOnly,
  },
  versions: { drafts: true },
  defaultSort: 'order',
  hooks: {
    afterChange: [revalidateCollection(departmentPaths)],
    afterDelete: [revalidateCollectionDelete(departmentPaths)],
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
      name: 'order',
      type: 'number',
      admin: { position: 'sidebar', description: 'Жагсаалт дахь дараалал.' },
    },
    {
      name: 'lead',
      type: 'text',
      label: 'Хариуцсан ажилтан',
      localized: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      localized: true,
      admin: { description: 'Жагсаалтын картад харагдана.' },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Дэлгэрэнгүй хуудасны хэсгүүд',
      blocks: layoutBlocks,
    },
  ],
}
