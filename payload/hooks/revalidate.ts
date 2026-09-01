import { revalidatePath } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
} from 'payload'

type PathBuilder = (doc: Record<string, unknown>) => string[]

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
    paths.forEach((path) => revalidatePath(path))

    return doc
  }

export const revalidateCollectionDelete =
  (buildPaths: PathBuilder): CollectionAfterDeleteHook =>
  ({ doc, req }) => {
    if (req.context?.disableRevalidate) return doc
    buildPaths(doc as Record<string, unknown>).forEach((path) => revalidatePath(path))
    return doc
  }

/** `theme` and `siteSettings` touch the shared layout, so the whole tree goes. */
export const revalidateLayout: GlobalAfterChangeHook = ({ doc, req }) => {
  if (req.context?.disableRevalidate) return doc
  revalidatePath('/', 'layout')
  return doc
}
