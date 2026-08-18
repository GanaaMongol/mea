import type { Block } from 'payload'

import { sectionHeader } from '@/payload/fields/sectionHeader'

/**
 * `data-table` (hub-*, membership-detail): a plain table an editor fills in.
 * Cells are text, in the same order as the columns above them.
 */
export const DataTableBlock: Block = {
  slug: 'dataTable',
  interfaceName: 'DataTableBlock',
  labels: { singular: 'Хүснэгт', plural: 'Хүснэгтүүд' },
  fields: [
    sectionHeader(),
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'region',
      options: [
        { label: 'Бүсийн хүснэгт (дулаан толгой)', value: 'region' },
        { label: 'Энгийн', value: 'plain' },
        { label: 'Бүртгэлийн жагсаалт (шүүлтүүртэй)', value: 'list' },
      ],
    },
    {
      name: 'filters',
      type: 'array',
      label: 'Шүүлтүүр',
      labels: { singular: 'Шүүлтүүр', plural: 'Шүүлтүүр' },
      admin: {
        initCollapsed: false,
        description: 'Багана бүрийн утгуудаас сонголт үүсгэнэ.',
        condition: (_, s) => s?.variant === 'list',
      },
      fields: [
        { name: 'label', type: 'text', required: true, localized: true },
        {
          name: 'column',
          type: 'number',
          required: true,
          label: 'Хэддэх багана (1-ээс эхэлнэ)',
          min: 1,
        },
      ],
    },
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Багана', plural: 'Багана' },
      admin: { initCollapsed: false },
      fields: [{ name: 'label', type: 'text', required: true, localized: true }],
    },
    {
      name: 'rows',
      type: 'array',
      labels: { singular: 'Мөр', plural: 'Мөрүүд' },
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'cells',
          type: 'array',
          labels: { singular: 'Нүд', plural: 'Нүднүүд' },
          fields: [{ name: 'value', type: 'text', localized: true }],
        },
      ],
    },
  ],
}
