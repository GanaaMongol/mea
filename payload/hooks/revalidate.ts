import { revalidatePath } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
} from 'payload'

import { LOCALES } from '@/lib/i18n'

type PathBuilder = (doc: Record<string, unknown>) => string[]

/**
 * Path builders speak in public URLs (`/news/x`), but the routes live under
 * `app/(frontend)/[lang]`, and `revalidatePath` matches the route file — the
 * rewrite destination — not the address bar. So every public path is flushed
 * once per locale.
 */
const flush = (path: string): void => {
  LOCALES.forEach((locale) => revalidatePath(`/${locale}${path === '/' ? '' : path}`))
}

/**
 * Payload edits are invisible to the frontend without this — the route stays on
 * its cached render. Every content collection wires these two hooks.
 */
export const revalidateCollection =
  (buildPaths: PathBuilder): CollectionAfterChangeHook =>
  ({ doc, previousDoc, req }) => {
    if (req.context?.disableRevalidate) return doc

    const paths = new Set(buildPaths(doc as Record<string, unknown>))
    // A slug change orphans the old URL, so flush that one too.
    if (previousDoc) {
      buildPaths(previousDoc as Record<string, unknown>).forEach((path) => paths.add(path))
    }
    paths.forEach(flush)

    return doc
  }

export const revalidateCollectionDelete =
  (buildPaths: PathBuilder): CollectionAfterDeleteHook =>
  ({ doc, req }) => {
    if (req.context?.disableRevalidate) return doc
    buildPaths(doc as Record<string, unknown>).forEach(flush)
    return doc
  }

/** `theme` and `siteSettings` touch the shared layout, so the whole tree goes. */
export const revalidateLayout: GlobalAfterChangeHook = ({ doc, req }) => {
  if (req.context?.disableRevalidate) return doc
  revalidatePath('/[lang]', 'layout')
  return doc
}
