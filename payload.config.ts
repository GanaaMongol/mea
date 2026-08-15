import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { BoardMembers } from '@/payload/collections/BoardMembers'
import { Departments } from '@/payload/collections/Departments'
import { Hubs } from '@/payload/collections/Hubs'
import { Media } from '@/payload/collections/Media'
import { Members } from '@/payload/collections/Members'
import { MembershipTiers } from '@/payload/collections/MembershipTiers'
import { Pages } from '@/payload/collections/Pages'
import { Posts } from '@/payload/collections/Posts'
import { Users } from '@/payload/collections/Users'
import { SiteSettings } from '@/payload/globals/SiteSettings'
import { Theme } from '@/payload/globals/Theme'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '— MEA',
    },
  },

  // Mongolian is the site's primary language; English is wired up from day one so
  // the announcement bar's language switcher has somewhere to go.
  localization: {
    locales: [
      { label: 'Монгол', code: 'mn' },
      { label: 'English', code: 'en' },
    ],
    defaultLocale: 'mn',
    fallback: true,
  },

  collections: [
    Pages,
    Posts,
    Departments,
    Hubs,
    BoardMembers,
    MembershipTiers,
    Media,
    Members,
    Users,
  ],
  globals: [Theme, SiteSettings],

  editor: lexicalEditor(),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
