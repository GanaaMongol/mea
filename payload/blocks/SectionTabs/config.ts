import type { Block } from 'payload'

import { linkFields } from '@/payload/fields/link'

/**
 * The horizontal link row under most banners: `dept-tabs` (about-*, departments,
 * hubs), `tab-bar` (membership), `cap-tabs` / `news-filter` (news).
 */
export const SectionTabsBlock: Block = {
  slug: 'sectionTabs',
  interfaceName: 'SectionTabsBlock',
  labels: { singular: 'Табууд', plural: 'Табууд' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'dept',
      options: [
        { label: 'Албад / Бидний тухай (dept-tabs)', value: 'dept' },
        { label: 'Гишүүнчлэл (tab-bar)', value: 'bar' },
        { label: 'Мэдээ (cap-tabs)', value: 'cap' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      admin: { initCollapsed: false },
      fields: linkFields,
    },
    {
      name: 'align',
      type: 'select',
      defaultValue: 'left',
      options: [
        { label: 'Зүүн', value: 'left' },
        { label: 'Төв', value: 'center' },
      ],
    },
  ],
}
