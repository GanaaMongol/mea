import type { CollectionConfig } from 'payload'

import { adminsOnly } from '@/payload/access'

/**
 * A nav entry, not a content type. Prayers are `posts` with `kind: 'prayer'` —
 * one table, one set of blocks, one detail route. This collection carries no
 * fields and can never hold a document; its list view redirects to the filtered
 * posts list. Registering it right after `Posts` in `payload.config.ts` is what
 * places "Залбирал" directly under "Мэдээ & Нийтлэл" in the sidebar.
 */
export const Prayers: CollectionConfig = {
  slug: 'prayers',
  labels: { singular: 'Залбирал', plural: 'Залбирал' },
  admin: {
    group: 'Агуулга',
    components: {
      views: {
        list: { Component: '/payload/components/PrayerListRedirect#PrayerListRedirect' },
      },
    },
  },
  access: {
    // `read` is what makes the entry visible in the nav; nothing may be written.
    read: adminsOnly,
    create: () => false,
    update: () => false,
    delete: () => false,
  },
  fields: [],
}
