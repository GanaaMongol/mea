import type { Block } from 'payload'

/** A standalone image — `map-block` (membership-detail.html) and friends. */
export const FigureBlock: Block = {
  slug: 'figure',
  interfaceName: 'FigureBlock',
  labels: { singular: 'Зураг', plural: 'Зураг' },
  fields: [
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'caption', type: 'text', localized: true },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'map',
      options: [
        { label: 'Газрын зураг (голлуулсан)', value: 'map' },
        { label: 'Бүтэн өргөн', value: 'wide' },
      ],
    },
  ],
}
