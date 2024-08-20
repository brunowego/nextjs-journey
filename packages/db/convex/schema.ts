import { defineSchema, defineTable } from 'convex/server'
import { migrationsTable } from 'convex-helpers/server/migrations'
import { authTables } from '@convex-dev/auth/server'
import { v } from 'convex/values'

export default defineSchema({
  migrations: migrationsTable,
  ...authTables,
  messages: defineTable({
    userId: v.id('users'),
    body: v.string(),
  }),
  products: defineTable({
    title: v.string(),
    price: v.float64(),
    state: v.optional(v.string()),
  }),
})
