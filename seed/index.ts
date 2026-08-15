import config from '@payload-config'
import { getPayload } from 'payload'

import { seedChrome } from './chrome'
import { seedHome } from './home'
import { seedNewsPage } from './news'
import { seedPosts } from './posts'
import { seedTheme } from './theme'
import { seedUsers } from './users'

/**
 * Idempotent. Run with `npm run seed` — safe to re-run after schema changes.
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
