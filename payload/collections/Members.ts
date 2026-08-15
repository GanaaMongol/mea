import type { CollectionConfig } from 'payload'

import { adminsOnly, adminsOnlyField, selfOnly } from '@/payload/access'

/**
 * Public site accounts — the audience of `/login`, `/membership/join` and
 * `/profile`. Deliberately separate from `users` (the admin panel collection)
 * so a public signup can never gain CMS access.
 */
export const Members: CollectionConfig = {
  slug: 'members',
  labels: { singular: 'Гишүүн', plural: 'Гишүүд' },
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'fullName', 'organization', 'status'],
    group: 'Гишүүнчлэл',
  },
  access: {
    read: selfOnly,
    // Public signup goes through /membership/join; the Server Action creates the doc.
    create: () => true,
    update: selfOnly,
    delete: adminsOnly,
    admin: () => false,
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'organization',
      type: 'text',
      label: 'Байгууллага / Чуулган',
    },
    {
      name: 'tier',
      type: 'relationship',
      relationTo: 'membershipTiers',
      label: 'Гишүүнчлэлийн төрөл',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Хүлээгдэж буй', value: 'pending' },
        { label: 'Баталгаажсан', value: 'approved' },
        { label: 'Түдгэлзүүлсэн', value: 'suspended' },
      ],
      admin: { position: 'sidebar' },
      access: {
        // A member must never be able to approve themselves.
        create: adminsOnlyField,
        update: adminsOnlyField,
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: { position: 'sidebar' },
      access: {
        read: adminsOnlyField,
        create: adminsOnlyField,
        update: adminsOnlyField,
      },
    },
  ],
}
