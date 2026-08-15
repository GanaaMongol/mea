import 'server-only'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

/** Local API client. Server Components and Server Actions only. */
export const getPayloadClient = () => getPayload({ config: configPromise })
