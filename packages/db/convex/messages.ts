import { query, mutation } from './_generated/server'
import { v } from 'convex/values'

import { auth } from './auth'

export const list = query({
  args: {},
  handler: async (ctx) => {
    const messages = await ctx.db.query('messages').order('desc').take(100)

    return Promise.all(
      messages.map(async (message) => {
        // @ts-ignore
        const { name, email } = await ctx.db.get(message.userId)

        return { ...message, author: name ?? email }
      }),
    )
  },
})

export const send = mutation({
  args: { body: v.string(), author: v.string() },
  handler: async (ctx, { body }) => {
    const userId = await auth.getUserId(ctx)

    if (userId === null) {
      throw new Error('Not signed in')
    }

    await ctx.db.insert('messages', { body, userId })
  },
})
