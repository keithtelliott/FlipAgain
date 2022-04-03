import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        username: 'keith',
        email: 'keith@keith',
        flashcards: {
          create: [
            {
              topic: 'Habits',
              front: 'Morning',
              back: 'Make coffee',
              // orderNum: 2.2,
            },
            { topic: 'Habits', front: 'Lunch', back: 'ski', orderNum: 3 },
            {
              topic: 'Habits',
              front: 'Dinner',
              back: 'chill with family',
              // orderNum: 1,
            },
            {
              topic: 'Redwood',
              front: 'Generate Service',
              back: 'yarn rw g sdl <model_name>',
            },
            {
              topic: 'Alaska',
              front: 'Capital City',
              back: 'Juneau',
            },
            {
              topic: 'alaska',
              front: 'Capital City',
              back: 'Juneau',
            },
          ],
        },
      },
    },
    two: { data: { username: 'bo', email: 'bo@bo' } },
  },
})

export type StandardScenario = typeof standard
