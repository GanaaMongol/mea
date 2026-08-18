import type { Block } from 'payload'

/**
 * `vision-values` (about-vision.html): a fixed title column beside a verse and a
 * blue-check list. The check mark is a design asset, not content.
 */
export const ValuesListBlock: Block = {
  slug: 'valuesList',
  interfaceName: 'ValuesListBlock',
  labels: { singular: 'Эрхэмлэх зүйлс', plural: 'Эрхэмлэх зүйлс' },
  fields: [
    {
      name: 'title',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'verse',
      type: 'textarea',
      label: 'Ишлэл (блок хэлбэрээр)',
      localized: true,
    },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Зүйл', plural: 'Зүйлс' },
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
          localized: true,
        },
      ],
    },
  ],
}
