import type { Block } from 'payload'

import { sectionHeader } from '@/payload/fields/sectionHeader'

import { MONGOLIA_REGIONS } from './regions'

/**
 * The clickable Mongolia map (membership-detail.html). Each aimag is one path in
 * `public/images/mongolia.svg`; the rows below pair a path with its name so an
 * editor can correct a label without touching the artwork.
 */
export const RegionMapBlock: Block = {
  slug: 'regionMap',
  interfaceName: 'RegionMapBlock',
  labels: { singular: 'Аймгийн газрын зураг', plural: 'Аймгийн газрын зураг' },
  fields: [
    sectionHeader(),
    {
      name: 'regions',
      type: 'array',
      label: 'Аймгууд',
      defaultValue: MONGOLIA_REGIONS,
      admin: { initCollapsed: true, description: 'SVG доторх path ↔ аймгийн нэр.' },
      fields: [
        { name: 'pathId', type: 'text', required: true },
        { name: 'name', type: 'text', required: true, localized: true },
      ],
    },
    {
      name: 'linkToTable',
      type: 'checkbox',
      label: 'Дарахад доорх хүснэгтийг шүүх',
      defaultValue: true,
    },
  ],
}
