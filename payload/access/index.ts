import type { Access, FieldAccess } from 'payload'

/** Public read for site content. Drafts stay hidden unless the request is authenticated. */
export const publishedOrSignedIn: Access = ({ req: { user } }) => {
  if (user) return true
  return {
    _status: {
      equals: 'published',
    },
  }
}

export const anyone: Access = () => true

export const signedIn: Access = ({ req: { user } }) => Boolean(user)

/** Admin-panel users only — `members` must never gain write access to content. */
export const adminsOnly: Access = ({ req: { user } }) => user?.collection === 'users'

export const adminsOnlyField: FieldAccess = ({ req: { user } }) => user?.collection === 'users'

/** A member may read/update only their own record. */
export const selfOnly: Access = ({ req: { user } }) => {
  if (user?.collection === 'users') return true
  if (user?.collection === 'members') return { id: { equals: user.id } }
  return false
}
