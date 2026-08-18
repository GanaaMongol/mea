import type { Block } from 'payload'

/** `timeline` (about-history): a year track above a grid of milestone cards. */
export const TimelineBlock: Block = {
  slug: 'timeline',
  interfaceName: 'TimelineBlock',
  labels: { singular: 'Он цагийн хэлхээс', plural: 'Он цагийн хэлхээс' },
  fields: [
    { name: 'overline', type: 'text', label: 'Жижиг шошго', localized: true },
    { name: 'title', type: 'text', localized: true },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Он', plural: 'Онууд' },
      admin: { initCollapsed: true },
      fields: [
        { name: 'year', type: 'text', required: true },
        { name: 'title', type: 'text', required: true, localized: true },
        { name: 'text', type: 'textarea', localized: true },
        {
          name: 'active',
          type: 'checkbox',
          label: 'Онцолсон он',
          defaultValue: false,
        },
      ],
    },
  ],
}
