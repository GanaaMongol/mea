import type { Block } from 'payload'

/**
 * `data-table` (hub-*, membership-detail): a plain table an editor fills in.
 * Cells are text, in the same order as the columns above them.
 */
export const DataTableBlock: Block = {
  slug: 'dataTable',
  interfaceName: 'DataTableBlock',
  labels: { singular: 'Хүснэгт', plural: 'Хүснэгтүүд' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'region',
      options: [
        { label: 'Бүсийн хүснэгт (дулаан толгой)', value: 'region' },
        { label: 'Энгийн', value: 'plain' },
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
