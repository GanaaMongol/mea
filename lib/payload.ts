import 'server-only'

import configPromise from '@payload-config'
import { getPayload, type Payload } from 'payload'

/**
 * One Payload instance per process, pinned to `globalThis`.
 *
 * `getPayload()` memoises internally, but only per module instance — and the
 * standalone build can hand the page and a block component separate copies of
 * this module, so a page whose block queries too (`postsFeed`,
 * `departmentGrid`) could pay a second initialisation on every request.
 * `globalThis` is shared across those copies, so it cannot happen.
 */
const cache = globalThis as typeof globalThis & { __meaPayload?: Promise<Payload> }

/** Local API client. Server Components and Server Actions only. */
export const getPayloadClient = (): Promise<Payload> => {
  cache.__meaPayload ??= getPayload({ config: configPromise })
  return cache.__meaPayload
}
