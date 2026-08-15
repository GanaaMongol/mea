import type { Block } from 'payload'

import { link } from '@/payload/fields/link'
import { sectionHeader } from '@/payload/fields/sectionHeader'

/** index.html's `digital_strategy` — the "4 Хурдасгуур" numbered image cards. */
export const AcceleratorsBlock: Block = {
  slug: 'accelerators',
  interfaceName: 'AcceleratorsBlock',
  labels: { singular: 'Хурдасгуур', plural: 'Хурдасгуур' },
  fields: [
    sectionHeader(),
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'text',
          type: 'textarea',
          localized: true,
        },
        link({ appearance: false }),
      ],
    },
    {
      name: 'numbered',
      type: 'checkbox',
      label: 'Дугаарлах (01, 02 …)',
      defaultValue: true,
    },
  ],
}
