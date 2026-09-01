import type { Block } from 'payload'

/** `stats-row` (about-history): big numbers with a caption under each. */
export const StatsRowBlock: Block = {
  slug: 'statsRow',
  interfaceName: 'StatsRowBlock',
  labels: { singular: 'Тоон үзүүлэлт', plural: 'Тоон үзүүлэлт' },
  fields: [
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Үзүүлэлт', plural: 'Үзүүлэлтүүд' },
      admin: { initCollapsed: false },
      fields: [
        { name: 'number', type: 'text', required: true, localized: true },
        { name: 'label', type: 'text', required: true, localized: true },
      ],
    },
  ],
}
