import type { Block } from 'payload'

/** The "contact this ministry" card that closes a ministry page. */
export const ContactBoxBlock: Block = {
  slug: 'contactBox',
  interfaceName: 'ContactBoxBlock',
  labels: { singular: 'Холбоо барих хайрцаг', plural: 'Холбоо барих хайрцаг' },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      defaultValue: 'Манай үйлчлэлтэй холбогдох:',
    },
    { name: 'personName', type: 'text', label: 'Хариуцсан хүн', localized: true },
    { name: 'personRole', type: 'text', label: 'Албан тушаал', localized: true },
    { name: 'phone', type: 'text', label: 'Утас' },
    { name: 'email', type: 'email', label: 'Имэйл' },
  ],
}
