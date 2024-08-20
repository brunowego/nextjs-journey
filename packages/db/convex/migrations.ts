import { makeMigration } from 'convex-helpers/server/migrations'

import { internalMutation } from './_generated/server'

const migration = makeMigration(internalMutation, {
  migrationTable: 'migrations',
})

const states = ['active', 'inactive', 'pending', 'deleted']

export const setStateUpperCase = migration({
  table: 'products',
  migrateOne: async (ctx, doc) => {
    if (doc.state && states.includes(doc.state.toLowerCase())) {
      await ctx.db.patch(doc._id, { state: doc.state.toUpperCase() })
    }
  },
})
