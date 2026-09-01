import type { Block } from 'payload'

/** `history-grid` (about-history, about-congress): a title column beside prose. */
export const HistoryGridBlock: Block = {
  slug: 'historyGrid',
  interfaceName: 'HistoryGridBlock',
  labels: { singular: 'Гарчиг + текст', plural: 'Гарчиг + текст' },
  fields: [
    { name: 'overline', type: 'text', label: 'Жижиг шошго', localized: true },
    { name: 'title', type: 'text', required: true, localized: true },
    {
      name: 'titleTone',
      type: 'select',
      label: 'Гарчгийн өнгө',
      defaultValue: 'primary',
      options: [
        { label: 'Цэнхэр', value: 'primary' },
        { label: 'Бараан', value: 'neutral' },
      ],
    },
    {
      name: 'paragraphs',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Догол мөр', plural: 'Догол мөрүүд' },
      admin: { initCollapsed: true },
      fields: [{ name: 'text', type: 'textarea', required: true, localized: true }],
    },
  ],
}
