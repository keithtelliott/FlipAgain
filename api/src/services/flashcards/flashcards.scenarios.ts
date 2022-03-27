import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FlashcardCreateArgs>({
  flashcard: {
    one: {
      data: {
        topic: 'String',
        User: { create: { username: 'String620887', email: 'String5414553' } },
      },
    },
    two: {
      data: {
        topic: 'String',
        User: { create: { username: 'String4618914', email: 'String6447739' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
