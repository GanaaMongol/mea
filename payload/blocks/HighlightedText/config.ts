import type { Block } from 'payload'

/** `highlighted-text` (about-history): one large display-font paragraph. */
export const HighlightedTextBlock: Block = {
  slug: 'highlightedText',
  interfaceName: 'HighlightedTextBlock',
  labels: { singular: 'Онцлох текст', plural: 'Онцлох текст' },
  fields: [{ name: 'text', type: 'textarea', required: true, localized: true }],
}
