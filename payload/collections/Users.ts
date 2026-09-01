import type { CollectionConfig } from 'payload'

import { adminsOnly } from '@/payload/access'

/**
 * Admin-panel users only. Public membership accounts live in `members` — keeping
 * them apart means a signup can never widen access to the CMS.
 */
export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'Админ', plural: 'Админ хэрэглэгчид' },
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Систем',
  },
  access: {
    read: adminsOnly,
    create: adminsOnly,
    update: adminsOnly,
    delete: adminsOnly,
    admin: ({ req: { user } }) => user?.collection === 'users',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
}
