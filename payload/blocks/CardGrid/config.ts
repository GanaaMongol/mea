import type { Block } from 'payload'

import { link } from '@/payload/fields/link'
import { sectionHeader } from '@/payload/fields/sectionHeader'

/**
 * The icon-card row. `info` is index.html's `info-cards`; the other variants
 * arrive with the about/membership pages that use the same shape.
 */
export const CardGridBlock: Block = {
  slug: 'cardGrid',
  interfaceName: 'CardGridBlock',
  labels: { singular: 'Картын тор', plural: 'Картын тор' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'info',
      options: [
        { label: 'Мэдээллийн карт (info-cards)', value: 'info' },
        { label: 'Эрхэм зорилго (vision-mission)', value: 'mission' },
        { label: 'Талархал (acknowledgment)', value: 'ack' },
        { label: 'Алхам (step-cards)', value: 'step' },
      ],
    },
    sectionHeader(),
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'badge',
          type: 'text',
          label: 'Тэмдэглэгээ (алхмын дугаар)',
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
      name: 'background',
      type: 'select',
      defaultValue: 'warm',
      options: [
        { label: 'Дулаан', value: 'warm' },
        { label: 'Цагаан', value: 'white' },
      ],
    },
  ],
}
