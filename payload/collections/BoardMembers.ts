import type { CollectionConfig } from 'payload'

import { adminsOnly, anyone } from '@/payload/access'

/**
 * People shown by the `peopleGrid` block: `board-card` (about-board),
 * `team-card` (department-detail, hub-faith-orgs) and `hub-region-team-card`
 * (hub-ulaanbaatar, hub-21-aimag). `group` decides which grid they land in.
 */
export const BoardMembers: CollectionConfig = {
  slug: 'boardMembers',
  labels: { singular: 'Хүн', plural: 'Хүмүүс' },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'group', 'order'],
    group: 'Агуулга',
  },
  access: {
    read: anyone,
    create: adminsOnly,
    update: adminsOnly,
    delete: adminsOnly,
  },
  defaultSort: 'order',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'role',
      type: 'text',
      localized: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'group',
      type: 'select',
      required: true,
      defaultValue: 'board',
      options: [
        { label: 'Удирдах зөвлөл', value: 'board' },
        { label: 'Албаны баг', value: 'team' },
        { label: 'Бүсийн баг', value: 'region' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'department',
      type: 'relationship',
      relationTo: 'departments',
      admin: {
        position: 'sidebar',
        condition: (_, s) => s?.group === 'team',
      },
    },
    {
      name: 'hub',
      type: 'relationship',
      relationTo: 'hubs',
      admin: {
        position: 'sidebar',
        condition: (_, s) => s?.group === 'region',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: { position: 'sidebar' },
    },
  ],
}
