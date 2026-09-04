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
import { Prayers } from '@/payload/collections/Prayers'
import { Users } from '@/payload/collections/Users'
import { SiteSettings } from '@/payload/globals/SiteSettings'
import { Theme } from '@/payload/globals/Theme'
import { s3Storage } from '@payloadcms/storage-s3'

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
    // Хажуугийн цэсэнд "Мэдээ & Нийтлэл"-ийн яг доор гарахын тулд Posts-ын дараа.
    Prayers,
    Departments,
    Hubs,
    BoardMembers,
    MembershipTiers,
    Media,
    Members,
    Feedback,
    Users,
  ],
  
  plugins: [
    s3Storage({
      collections: { media: true },
      bucket: process.env.S3_BUCKET!,
      config: {
        region: process.env.AWS_REGION,
      },
    }),
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
    logger:
      process.env.PAYLOAD_LOG_SQL === '1'
        ? {
            logQuery(query, params) {
              console.info('[Payload SQL]', query, '\nparams:', JSON.stringify(params))
            },
          }
        : undefined,
    pool: {
      connectionString: process.env.DATABASE_URI || '',
      // Postgres' LLVM JIT is the whole of the ~6s production TTFB, measured
      // 2026-09-04. Reading one `posts` document joins the 25-block `layout`
      // catalogue and its locale tables; the planner's cost estimate clears
      // `jit_above_cost` (100000) and `jit_optimize_above_cost` (500000), so
      // the server spends seconds in LLVM compiling a query that executes in
      // 98ms. Same query, same 13 rows, same build: 5415ms with JIT, 98ms with
      // `SET jit = off`. Nothing here is an analytical query — the workload is
      // many small reads, which JIT can only ever make slower.
      //
      // `options` is passed to the backend at connection time, so it applies to
      // every pooled connection without touching the server's postgresql.conf.
      // Invisible on a laptop: Postgres.app ships without LLVM, so it never
      // JITs whatever the setting says.
      options: '-c jit=off',
    },
  }),
  sharp,
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
