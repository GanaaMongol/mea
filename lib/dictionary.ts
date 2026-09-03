import { DEFAULT_LOCALE, type Locale } from './i18n'

/**
 * The handful of strings that live in code rather than in Payload: card tags,
 * the search page's own chrome, and aria-labels. Everything an editor owns comes
 * from `siteSettings` or the block's own fields — this file is only for copy
 * that has no field to live in.
 */
const UI = {
  mn: {
    read: 'Унших',
    relatedPosts: 'Төстэй мэдээнүүд',
    relatedPrayers: 'Бусад залбирлууд',
    kindNews: 'Мэдээ',
    kindArticle: 'Нийтлэл',
    kindPrayer: 'Залбирал',
    search: 'Хайх',
    searchTitle: 'Хайлт',
    searchPrompt: 'Хайх үгээ оруулна уу',
    searchResults: 'үр дүн',
    searchEmpty: 'Илэрц олдсонгүй. Өөр үгээр хайж үзнэ үү.',
    searchPlaceholder: 'Мэдээ мэдээллээс хайх...',
    menu: 'Цэс',
    close: 'Хаах',
    groupPage: 'Хуудас',
    groupDepartment: 'Үйлчлэлийн алба',
    groupHub: 'ХАБ',
  },
  en: {
    read: 'Read',
    relatedPosts: 'Related news',
    relatedPrayers: 'Other prayers',
    kindNews: 'News',
    kindArticle: 'Article',
    kindPrayer: 'Prayer',
    search: 'Search',
    searchTitle: 'Search',
    searchPrompt: 'Enter a search term',
    searchResults: 'results',
    searchEmpty: 'Nothing found. Try a different word.',
    searchPlaceholder: 'Search news and articles...',
    menu: 'Menu',
    close: 'Close',
    groupPage: 'Page',
    groupDepartment: 'Ministry',
    groupHub: 'Hub',
  },
} as const satisfies Record<Locale, Record<string, string>>

export type UiStrings = (typeof UI)[Locale]

export const ui = (locale: Locale = DEFAULT_LOCALE): UiStrings => UI[locale]
