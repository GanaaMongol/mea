import type { Payload } from 'payload'

const EMAIL = process.env.SEED_ADMIN_EMAIL || 'admin@mea.mn'
const PASSWORD = process.env.SEED_ADMIN_PASSWORD || 'changeme123'

export const seedUsers = async (payload: Payload) => {
  const existing = await payload.find({
    collection: 'users',
    where: { email: { equals: EMAIL } },
    limit: 1,
    pagination: false,
    overrideAccess: true,
  })

  if (existing.docs[0]) {
    payload.logger.info(`seed: admin ${EMAIL} already exists`)
    return
  }

  await payload.create({
    collection: 'users',
    data: { email: EMAIL, password: PASSWORD, name: 'MEA Admin' },
    overrideAccess: true,
  })

  payload.logger.info(`seed: created admin ${EMAIL} (password: ${PASSWORD})`)
}
