import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { VideoBlock } from '@/payload/blocks/Video/config'
import { BoardMembers } from '@/payload/collections/BoardMembers'
import { Departments } from '@/payload/collections/Departments'
import { Feedback } from '@/payload/collections/Feedback'
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
    components: {
      // Залбирал бол `posts`-ын нэг төрөл. Тусдаа collection үүсгэхгүйгээр
      // хажуугийн цэснээс шүүсэн жагсаалт руу шууд орох холбоос.
      afterNavLinks: ['/payload/components/PrayerNavLink#PrayerNavLink'],
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
    Feedback,
    Users,
  ],
  globals: [Theme, SiteSettings],

  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      // Rich text доторх "+" цэс: одоогоор видео.
      BlocksFeature({ blocks: [VideoBlock] }),
    ],
  }),
  db: postgresAdapter({
    // Migrations, not dev push. Push re-introspected all 800+ tables on every
    // boot (~95s before Payload answered); with it off, the schema changes only
    // when a migration runs. After changing a collection/block/global:
    //   npm run migrate:create -- --name <what-changed>
    //   npm run migrate
    push: false,
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
