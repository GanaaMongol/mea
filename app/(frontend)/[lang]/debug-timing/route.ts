import { NextResponse } from 'next/server'

import { getPayloadClient } from '@/lib/payload'
import { getPageBySlug } from '@/lib/queries'

/**
 * TEMPORARY — production answers in ~6s on any page whose layout holds a block
 * that queries (`postsFeed`, `departmentGrid`), and in ~0.7s otherwise.
 *
 * Round 1 (2026-09-04) settled where the time goes: rendering is innocent. In a
 * route handler with no React tree, `pages` answered in 77ms while the `posts`
 * and `departments` queries took 5.6s and 5.4s — for 4 and 8 rows.
 *
 * Round 2, below, splits those queries apart one dimension at a time — depth,
 * select, sort, locale, the `where` clause — so the 5.5s lands on exactly one.
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
  const payload = await getPayloadClient()
  const t: Record<string, number> = {}

  const time = async <T>(name: string, run: () => Promise<T>): Promise<T> => {
    const mark = performance.now()
    const value = await run()
    t[name] = ms(mark)
    return value
  }

  // The baseline: exactly what PostsFeed runs.
  const base = await time('a_posts_depth1', () =>
    payload.find({
      collection: 'posts',
      sort: '-publishedAt',
      limit: 4,
      depth: 1,
      locale: 'mn',
      pagination: false,
    }),
  )

  // Same, minus relationship resolution.
  await time('b_posts_depth0', () =>
    payload.find({
      collection: 'posts',
      sort: '-publishedAt',
      limit: 4,
      depth: 0,
      locale: 'mn',
      pagination: false,
    }),
  )

  // Same, minus the document body: no blocks, no rich text, no locale columns
  // beyond the three asked for.
  await time('c_posts_depth0_select', () =>
    payload.find({
      collection: 'posts',
      sort: '-publishedAt',
      limit: 4,
      depth: 0,
      locale: 'mn',
      select: { title: true, slug: true, publishedAt: true },
      pagination: false,
    }),
  )

  // Is it the sort?
  await time('d_posts_nosort', () =>
    payload.find({
      collection: 'posts',
      limit: 4,
      depth: 0,
      locale: 'mn',
      select: { title: true },
      pagination: false,
    }),
  )

  // Is it localization — the _locales join and its fallback?
  await time('e_posts_nolocale', () =>
    payload.find({
      collection: 'posts',
      sort: '-publishedAt',
      limit: 4,
      depth: 0,
      select: { title: true },
      pagination: false,
    }),
  )

  // Is it `pagination: false`?
  await time('f_posts_paginated', () =>
    payload.find({
      collection: 'posts',
      sort: '-publishedAt',
      limit: 4,
      depth: 0,
      locale: 'mn',
      select: { title: true },
    }),
  )

  // The cheapest question the adapter can ask this table.
  const count = await time('g_posts_count', () =>
    payload.count({ collection: 'posts' }),
  )

  // Control: `pages` is fast with a where clause. Is it still fast without one?
  await time('h_pages_nowhere', () =>
    payload.find({
      collection: 'pages',
      limit: 4,
      depth: 1,
      locale: 'mn',
      pagination: false,
    }),
  )

  // The other slow collection, stripped the same way.
  await time('i_departments_depth0_select', () =>
    payload.find({
      collection: 'departments',
      sort: 'order',
      limit: 12,
      depth: 0,
      locale: 'mn',
      select: { name: true },
      pagination: false,
    }),
  )

  await time('j_getPageBySlug_news', () => getPageBySlug('news', 'mn'))

  // Round 3. The same query is 10ms on a laptop and 5325ms here, on the same
  // data, and the cost is flat regardless of rows, limit or sort — the
  // fingerprint of planning, not execution. The prime suspect is JIT: an
  // unselected read of `posts` joins 25 block tables plus their locale tables,
  // whose estimated cost clears `jit_above_cost` (100000) and
  // `jit_optimize_above_cost` (500000), so Postgres spends seconds in LLVM
  // compiling a query that runs in milliseconds. Postgres.app, which is what
  // the laptop runs, ships without LLVM — which is why it never shows there.
  //
  // node-postgres hands back the most recently released connection first, so
  // `SET jit = off` here usually lands on the connection the next find() uses.
  // If the numbers do not move, the setting went to a different connection —
  // an inconclusive result, not a disproof.
  const pool = (payload.db as unknown as { pool?: { query: (q: string) => Promise<{ rows: Record<string, string>[] }> } }).pool
  const settings: Record<string, string> = {}

  if (pool) {
    for (const name of ['jit', 'jit_above_cost', 'jit_optimize_above_cost', 'server_version']) {
      try {
        const { rows } = await pool.query(`show ${name}`)
        settings[name] = Object.values(rows[0] ?? {})[0] ?? '?'
      } catch (error) {
        settings[name] = `error: ${(error as Error).message}`
      }
    }

    try {
      await pool.query('set jit = off')
      await time('k_posts_depth0_jit_off', () =>
        payload.find({
          collection: 'posts',
          sort: '-publishedAt',
          limit: 4,
          depth: 0,
          locale: 'mn',
          pagination: false,
        }),
      )
      await pool.query('reset jit')
    } catch (error) {
      settings.jit_off_test = `error: ${(error as Error).message}`
    }
  }

  t.total = ms(started)

  return NextResponse.json(
    {
      timings_ms: t,
      pg: settings,
      counts: { posts_returned: base.docs.length, posts_total: count.totalDocs },
      node: process.version,
      uptime_s: Math.round(process.uptime()),
      rss_mb: Math.round(process.memoryUsage().rss / 1024 / 1024),
    },
    { headers: { 'cache-control': 'no-store' } },
  )
}
