import type { Block } from 'payload'

import { sectionHeader } from '@/payload/fields/sectionHeader'

/**
 * `org-dept-grid` (organization.html). The cards are the home page's
 * "4 Хурдасгуур" cards, so a row of four expands on hover the same way.
 */
export const DepartmentGridBlock: Block = {
  slug: 'departmentGrid',
  interfaceName: 'DepartmentGridBlock',
  labels: { singular: 'Албадын тор', plural: 'Албадын тор' },
  fields: [
    sectionHeader(),
    {
      name: 'source',
      type: 'select',
      defaultValue: 'auto',
      options: [
        { label: 'Бүх алба (collection)', value: 'auto' },
        { label: 'Гараар сонгох', value: 'manual' },
      ],
    },
    {
      name: 'manual',
      type: 'relationship',
      relationTo: 'departments',
      hasMany: true,
      admin: { condition: (_, s) => s?.source === 'manual' },
    },
    {
      name: 'limit',
      type: 'number',
      defaultValue: 12,
      admin: { condition: (_, s) => s?.source !== 'manual' },
    },
  ],
}
