import { NextResponse } from 'next/server'

import { getPayloadClient } from '@/lib/payload'
import { getPageBySlug } from '@/lib/queries'

/**
 * TEMPORARY — production is answering in ~6s on any page whose layout holds a
 * block that queries (`postsFeed`, `departmentGrid`), and in ~0.7s otherwise,
 * while every one of these steps measured from outside is fast. This runs the
 * same steps in a route handler, where no React tree is rendered, so the
 * numbers say whether the time goes to the data layer or to rendering.
 *
 * The folder must not start with an underscore — Next treats `_name` as a
 * private folder and opts it out of routing, so `/_timing` fell through to
 * `[...slug]` and 404'd instead of running any of this.
 *
 * Returns durations only, never content. Delete once the cause is found.
 */
export const dynamic = 'force-dynamic'

const ms = (from: number) => Math.round(performance.now() - from)

export async function GET() {
  const started = performance.now()
  const t: Record<string, number> = {}

  let mark = performance.now()
  const payload = await getPayloadClient()
  t.getPayloadClient = ms(mark)

  mark = performance.now()
  await getPayloadClient()
  t.getPayloadClientAgain = ms(mark)

  mark = performance.now()
  const page = await getPageBySlug('news', 'mn')
  t.getPageBySlug_news = ms(mark)

  // Exactly the query `PostsFeed` runs.
  mark = performance.now()
  const posts = await payload.find({
    collection: 'posts',
    where: {},
    sort: '-publishedAt',
    limit: 4,
    depth: 1,
    locale: 'mn',
    pagination: false,
  })
  t.postsFeed_query = ms(mark)

  // Exactly the query `DepartmentGrid` runs.
  mark = performance.now()
  const departments = await payload.find({
    collection: 'departments',
    sort: 'order',
    limit: 12,
    depth: 1,
    locale: 'mn',
    pagination: false,
  })
  t.departmentGrid_query = ms(mark)

  t.total = ms(started)

  return NextResponse.json(
    {
      timings_ms: t,
      counts: {
        blocks: page?.layout?.length ?? 0,
        posts: posts.docs.length,
        departments: departments.docs.length,
      },
      node: process.version,
      uptime_s: Math.round(process.uptime()),
      rss_mb: Math.round(process.memoryUsage().rss / 1024 / 1024),
      heap_mb: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
    },
    { headers: { 'cache-control': 'no-store' } },
  )
}
