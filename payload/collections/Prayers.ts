import type { CollectionConfig } from 'payload'

import { adminsOnly, publishedOrSignedIn } from '@/payload/access'
import { articleFields } from '@/payload/fields/article'
import { revalidateCollection, revalidateCollectionDelete } from '@/payload/hooks/revalidate'

const prayerPaths = (doc: Record<string, unknown>) => [
  '/prayer',
  `/prayer/${typeof doc.slug === 'string' ? doc.slug : ''}`,
]

/**
 * Prayers are their own content type — same shape as a post (see
 * `articleFields`), own list, own route. Registered right after `Posts` in
 * `payload.config.ts`, which is what puts "Залбирал" under "Мэдээ & Нийтлэл"
 * in the admin sidebar.
 */
export const Prayers: CollectionConfig = {
  slug: 'prayers',
  labels: { singular: 'Залбирал', plural: 'Залбирал' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishedAt', 'updatedAt'],
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
    afterChange: [revalidateCollection(prayerPaths)],
    afterDelete: [revalidateCollectionDelete(prayerPaths)],
  },
  fields: articleFields(),
}
