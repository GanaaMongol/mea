import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import type { Payload } from 'payload'

/** Opt-in switch that lets the seed overwrite content an editor may have changed. */
export const SEED_FORCE = process.env.SEED_FORCE === '1' || process.env.SEED_FORCE === 'true'

const dirname = path.dirname(fileURLToPath(import.meta.url))
export const IMAGES_DIR = path.resolve(dirname, '../public/images')

/** Uploads `public/images/<filename>` into `media`, reusing an existing doc. */
export const upsertMedia = async (
  payload: Payload,
  filename: string,
  alt: string,
): Promise<number | null> => {
  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: filename } },
    limit: 1,
    pagination: false,
  })

  if (existing.docs[0]) return existing.docs[0].id

  const filePath = path.join(IMAGES_DIR, filename)
  if (!fs.existsSync(filePath)) {
    payload.logger.warn(`seed: missing image ${filename}`)
    return null
  }

  const doc = await payload.create({
    collection: 'media',
    data: { alt },
    filePath,
  })

  return doc.id
}

/**
 * Bootstrap only: creates the doc when its slug is free, and **leaves an
 * existing doc alone** — once a page is in the database, admin is the source of
 * truth and re-running the seed must not overwrite an editor's work.
 * Set `SEED_FORCE=1` to deliberately reset a doc back to these literals.
 */
export const upsertBySlug = async <T extends 'pages' | 'posts' | 'departments' | 'hubs' | 'membershipTiers'>(
  payload: Payload,
  collection: T,
  slug: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
) => {
  const existing = await payload.find({
    collection,
    where: { slug: { equals: slug } },
    limit: 1,
    pagination: false,
  })

  if (existing.docs[0]) {
    if (!SEED_FORCE) {
      payload.logger.info(`seed: ${collection}/${slug} exists — skipped (SEED_FORCE=1 to overwrite)`)
      return existing.docs[0]
    }

    return payload.update({
      collection,
      id: existing.docs[0].id,
      data,
      context: { disableRevalidate: true },
    })
  }

  return payload.create({
    collection,
    data: { ...data, slug },
    context: { disableRevalidate: true },
  })
}

/** Minimal lexical document from plain paragraphs. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const paragraphs = (...texts: string[]): any => ({
  root: {
    type: 'root',
    format: '',
    indent: 0,
    version: 1,
    direction: 'ltr',
    children: texts.map((text) => ({
      type: 'paragraph',
      format: '',
      indent: 0,
      version: 1,
      direction: 'ltr',
      textFormat: 0,
      children: [
        {
          type: 'text',
          detail: 0,
          format: 0,
          mode: 'normal',
          style: '',
          text,
          version: 1,
        },
      ],
    })),
  },
})

export const customLink = (label: string, url: string, appearance?: string) => ({
  type: 'custom' as const,
  label,
  url,
  ...(appearance ? { appearance } : {}),
})

/**
 * Globals have no slug to look up, so the caller passes `isSeeded` — a check for
 * a field the seed always fills. Same rule as `upsertBySlug`: never clobber a
 * global an editor has already touched unless `SEED_FORCE` is set.
 */
export const seedGlobal = async <T extends 'theme' | 'siteSettings'>(
  payload: Payload,
  slug: T,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isSeeded: (doc: any) => boolean,
) => {
  const current = await payload.findGlobal({ slug, depth: 0 }).catch(() => null)

  if (current && isSeeded(current) && !SEED_FORCE) {
    payload.logger.info(`seed: ${slug} exists — skipped (SEED_FORCE=1 to overwrite)`)
    return current
  }

  return payload.updateGlobal({ slug, data, context: { disableRevalidate: true } })
}
