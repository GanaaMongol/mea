import type { Block } from 'payload'

/**
 * `board-grid` (about-board, Figma 281:2970): a heading, a short lede and rows
 * of three people. Fed by the `boardMembers` collection so a person is edited
 * once and appears wherever their group is shown.
 */
export const PeopleGridBlock: Block = {
  slug: 'peopleGrid',
  interfaceName: 'PeopleGridBlock',
  labels: { singular: 'Хүмүүсийн тор', plural: 'Хүмүүсийн тор' },
  fields: [
    { name: 'title', type: 'text', localized: true },
    { name: 'description', type: 'textarea', localized: true },
    {
      name: 'source',
      type: 'select',
      label: 'Эх сурвалж',
      defaultValue: 'group',
      options: [
        { label: 'Бүлгээр (collection)', value: 'group' },
        { label: 'Гараар сонгох', value: 'manual' },
      ],
    },
    {
      name: 'group',
      type: 'select',
      defaultValue: 'board',
      options: [
        { label: 'Удирдах гишүүд', value: 'leadership' },
        { label: 'Зөвлөлийн гишүүд', value: 'board' },
        { label: 'Албаны баг', value: 'team' },
        { label: 'Бүсийн баг', value: 'region' },
      ],
      admin: { condition: (_, s) => s?.source !== 'manual' },
    },
    {
      name: 'people',
      type: 'relationship',
      relationTo: 'boardMembers',
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
