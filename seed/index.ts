import config from '@payload-config'
import { getPayload } from 'payload'

import { seedChrome } from './chrome'
import { seedHome } from './home'
import { seedNewsPage } from './news'
import { seedPosts } from './posts'
import { seedTheme } from './theme'
import { seedUsers } from './users'

/**
 * Bootstrap only, and non-destructive: anything that already exists in the
 * database is left untouched, because admin — not this file — owns the content
 * once the site is seeded. Re-run freely with `npm run seed`; run
 * `SEED_FORCE=1 npm run seed` to deliberately reset docs to these literals.
 */
const run = async () => {
  const payload = await getPayload({ config })

  await seedUsers(payload)
  await seedTheme(payload)
  await seedChrome(payload)
  await seedPosts(payload)
  await seedNewsPage(payload)
  await seedHome(payload)

  payload.logger.info('Seed complete.')
  process.exit(0)
}

await run()
