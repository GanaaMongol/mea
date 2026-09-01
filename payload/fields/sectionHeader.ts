import type { Field } from 'payload'

/**
 * The `content-block__header` / `org-section-header` / `news-header` pattern that
 * sits above most sections in the mockups. Reused as a field group rather than a
 * block of its own, so a section keeps its heading attached to its content.
 */
export const sectionHeader = (overrides: Partial<Field> = {}): Field =>
  ({
    name: 'header',
    type: 'group',
    label: 'Хэсгийн гарчиг',
    fields: [
      {
        name: 'label',
        type: 'text',
        label: 'Жижиг шошго',
        localized: true,
      },
      {
        name: 'title',
        type: 'text',
        localized: true,
      },
      {
        name: 'description',
        type: 'textarea',
        localized: true,
      },
      {
        name: 'align',
        type: 'select',
        defaultValue: 'left',
        options: [
          { label: 'Зүүн', value: 'left' },
          { label: 'Төв', value: 'center' },
        ],
      },
    ],
    ...overrides,
  }) as Field
