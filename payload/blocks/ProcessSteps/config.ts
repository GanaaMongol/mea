import type { Block } from 'payload'

import { sectionHeader } from '@/payload/fields/sectionHeader'

/** `process-steps` (membership.html): numbered steps laid out two to a row. */
export const ProcessStepsBlock: Block = {
  slug: 'processSteps',
  interfaceName: 'ProcessStepsBlock',
  labels: { singular: 'Үйл явцын алхмууд', plural: 'Үйл явцын алхмууд' },
  fields: [
    sectionHeader(),
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Алхам', plural: 'Алхмууд' },
      admin: { initCollapsed: true },
      fields: [
        { name: 'number', type: 'text', label: 'Дугаар' },
        { name: 'text', type: 'textarea', required: true, localized: true },
      ],
    },
  ],
}
