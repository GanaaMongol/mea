import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import type { Payload } from 'payload'

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

/** Creates a doc if its slug is free, otherwise updates the existing one. */
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
