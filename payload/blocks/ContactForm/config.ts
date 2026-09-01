import type { Block } from 'payload'

/**
 * The contact section: editable contact details on the left, a feedback form on
 * the right. The form's submissions land in the `feedback` collection — only its
 * labels live here, so an editor can retitle every field without touching code.
 */
export const ContactFormBlock: Block = {
  slug: 'contactForm',
  interfaceName: 'ContactFormBlock',
  labels: { singular: 'Холбоо барих + Санал хүсэлт', plural: 'Холбоо барих + Санал хүсэлт' },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Зүүн талын гарчиг',
      localized: true,
      required: true,
    },
    {
      name: 'details',
      type: 'array',
      label: 'Холбоо барих мэдээлэл',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Гарчиг',
          required: true,
          localized: true,
          admin: { description: 'Жишээ: Утас, Хаяг, Цахим шуудан' },
        },
        {
          name: 'items',
          type: 'array',
          label: 'Утга',
          fields: [
            { name: 'value', type: 'textarea', required: true, localized: true },
            {
              name: 'href',
              type: 'text',
              admin: { description: 'Заавал биш. Жишээ: tel:+97690152040, mailto:info@mea.mn' },
            },
          ],
        },
      ],
    },
    {
      name: 'form',
      type: 'group',
      label: 'Маягт',
      fields: [
        { name: 'title', type: 'text', localized: true, required: true },
        {
          type: 'row',
          fields: [
            { name: 'nameLabel', type: 'text', localized: true, admin: { width: '50%' } },
            { name: 'emailLabel', type: 'text', localized: true, admin: { width: '50%' } },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'phoneLabel', type: 'text', localized: true, admin: { width: '50%' } },
            { name: 'messageLabel', type: 'text', localized: true, admin: { width: '50%' } },
          ],
        },
        {
          type: 'row',
          fields: [
            { name: 'submitLabel', type: 'text', localized: true, admin: { width: '50%' } },
            {
              name: 'successMessage',
              type: 'text',
              localized: true,
              admin: { width: '50%', description: 'Амжилттай илгээсний дараа харагдана.' },
            },
          ],
        },
      ],
    },
  ],
}
