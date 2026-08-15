import type { Field } from 'payload'

type LinkOptions = {
  name?: string
  label?: string
  /** Add the button-appearance select (banners/CTAs need it, nav rows do not). */
  appearance?: boolean
  overrides?: Partial<Field>
}

const appearanceField: Field = {
  name: 'appearance',
  type: 'select',
  defaultValue: 'default',
  options: [
    { label: 'Текст холбоос', value: 'default' },
    { label: 'Үндсэн товч', value: 'primary' },
    { label: 'Хүрээтэй товч', value: 'outline' },
  ],
}

/** A single link: either an internal reference or a raw URL. */
export const linkFields: Field[] = [
  {
    type: 'row',
    fields: [
      {
        name: 'type',
        type: 'radio',
        defaultValue: 'reference',
        options: [
          { label: 'Дотоод хуудас', value: 'reference' },
          { label: 'Хаяг (URL)', value: 'custom' },
        ],
        admin: { layout: 'horizontal', width: '50%' },
      },
      {
        name: 'newTab',
        type: 'checkbox',
        label: 'Шинэ цонхонд нээх',
        admin: { width: '50%', style: { alignSelf: 'flex-end' } },
      },
    ],
  },
  {
    name: 'label',
    type: 'text',
    required: true,
    localized: true,
  },
  {
    name: 'reference',
    type: 'relationship',
    relationTo: ['pages', 'posts', 'departments', 'hubs', 'membershipTiers'],
    admin: { condition: (_, siblingData) => siblingData?.type === 'reference' },
  },
  {
    name: 'url',
    type: 'text',
    admin: { condition: (_, siblingData) => siblingData?.type === 'custom' },
  },
]

export const linkFieldsWithAppearance: Field[] = [...linkFields, appearanceField]

export const link = ({
  name = 'link',
  label,
  appearance = true,
  overrides,
}: LinkOptions = {}): Field =>
  ({
    name,
    label,
    type: 'group',
    fields: appearance ? linkFieldsWithAppearance : linkFields,
    ...overrides,
  }) as Field

export const linkArray = ({
  name = 'links',
  label,
  appearance = true,
  overrides,
}: LinkOptions = {}): Field =>
  ({
    name,
    label,
    type: 'array',
    fields: appearance ? linkFieldsWithAppearance : linkFields,
    admin: { initCollapsed: true },
    ...overrides,
  }) as Field
