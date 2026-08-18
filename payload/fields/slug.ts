import type { CollectionBeforeValidateHook, Field } from 'payload'

/** Cyrillic → latin, so Mongolian titles produce readable URLs. */
const CYRILLIC_MAP: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'j', з: 'z',
  и: 'i', й: 'i', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', ө: 'o', п: 'p',
  р: 'r', с: 's', т: 't', у: 'u', ү: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch',
  ш: 'sh', щ: 'sch', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya',
}

export const slugify = (value: string): string =>
  value
    .toLowerCase()
    .split('')
    .map((char) => (char in CYRILLIC_MAP ? CYRILLIC_MAP[char] : char))
    .join('')
    // `/` survives so nested pages keep real URLs (`about/vision` → /about/vision).
    .replace(/[^a-z0-9/]+/g, '-')
    .replace(/-*\/-*/g, '/')
    .replace(/\/{2,}/g, '/')
    .replace(/^[-/]+|[-/]+$/g, '')

/**
 * Fills `slug` from `sourceField` when it is left empty. Not localized — one URL
 * per document across locales keeps routing and revalidation simple.
 */
export const slugField = (sourceField = 'title'): Field => ({
  name: 'slug',
  type: 'text',
  required: true,
  unique: true,
  index: true,
  admin: {
    position: 'sidebar',
    description: 'URL-д ашиглагдана. Хоосон орхивол гарчгаас автоматаар үүснэ.',
  },
  hooks: {
    beforeValidate: [
      ({ value, data }) => {
        if (typeof value === 'string' && value.length > 0) return slugify(value)
        const source = data?.[sourceField]
        return typeof source === 'string' ? slugify(source) : value
      },
    ],
  },
})

export const fillSlugBeforeValidate =
  (sourceField = 'title'): CollectionBeforeValidateHook =>
  ({ data }) => {
    if (data && !data.slug && typeof data[sourceField] === 'string') {
      data.slug = slugify(data[sourceField] as string)
    }
    return data
  }
