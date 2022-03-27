import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }: Prisma.UserWhereUniqueInput) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const userByUsername = ({ username }: { username: string }) => {
  return db.user.findUnique({
    where: { username },
  })
}

const JUST_ONE_FLASHCARD = 1 // KTE, 3/6/2022: The first one is the one requested by the user, the second is needed to grab its orderNum
const SKIP_ZERO_WHEN_GRABBING_FIRST_FROM_DESC_LIST = 0

export const flashcardByUsernameAndTopicAndOrder = async ({
  username,
  topic,
  order,
}: {
  username: string
  topic: string
  order: number
}) => {
  const flashcardArray = await db.user
    .findUnique({
      where: { username },
    })
    .flashcards({
      where: {
        topic,
      },
      orderBy: {
        createdAt: 'asc',
      },
      skip: order - 1,
      take: JUST_ONE_FLASHCARD,
    })

  if (flashcardArray === null) return null

  return flashcardArray.length === 1 ? flashcardArray[0] : null
}

// GoDo, KTE, 3/13/2022:  Figure out why the following does not work.  Await does not seem to be in effect...
// const flashcardHelper = async (
//   username: string,
//   topic: string,
//   order: number,
//   take: number
// ) => {
//   console.log('calling db.user query in fcHelper')

//   const flashcardArray = await db.user
//     .findUnique({
//       where: { username },
//     })
//     .flashcards({
//       where: {
//         topic,
//       },
//       orderBy: {
//         orderNum: 'asc',
//       },
//       skip: order - 1,
//       take: take,
//     })

//   console.log(
//     'just called it.  Should await.  here is the fcarray:  ',
//     flashcardArray
//   )

//   return flashcardArray.length === 1 ? flashcardArray[0] : null
// }

export const flashcardPageByUsernameAndTopicAndOrder = async ({
  username,
  topic,
  order,
}: {
  username: string
  topic: string
  order: number
}) => {
  const flashcardArray = await db.user
    .findUnique({
      where: { username },
    })
    .flashcards({
      where: {
        topic,
      },
      orderBy: {
        createdAt: 'asc',
        // orderNum: 'asc',
      },
      skip: order - 1,
      take: JUST_ONE_FLASHCARD,
    })

  if (flashcardArray === null || flashcardArray?.length === 0) return null
  // GoDo, KTE, 3/26/2022:  If the order is not valid, I could return
  // a valid flashcard if the username and topic are valid.  Consider
  // this and potentially implement it...

  const flashcardsByUsernameAndTopic = await db.user
    .findUnique({ where: { username } })
    .flashcards({ where: { topic } })
  // GoDo:  Figure out how to count via the prisma query

  return {
    flashcard: flashcardArray[0],
    // flashcard: flashcardHelper(username, topic, order, JUST_ONE_FLASHCARD),
    count: flashcardsByUsernameAndTopic.length,
  }
}

export const topicsByUsername = async ({ username }: { username: string }) => {
  const topics = await db.user
    .findUnique({
      where: {
        username,
      },
    })
    .flashcards({ select: { topic: true }, distinct: ['topic'] })

  if (topics === null) return [] // return empty array if no topics exist

  console.log('users.ts, here are the topics:  ', topics)

  return topics.map((topic) => topic.topic)
}

export const flashcardPageByUsernameAndTopicAndLast = async ({
  username,
  topic,
}: {
  username: string
  topic: string
}) => {
  const flashcardArray = await db.user
    .findUnique({
      where: { username },
    })
    .flashcards({
      where: {
        topic,
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip: SKIP_ZERO_WHEN_GRABBING_FIRST_FROM_DESC_LIST,
      take: JUST_ONE_FLASHCARD,
    })
  console.log('here is flashcardArray...')
  console.log(flashcardArray)

  if (flashcardArray === null || flashcardArray?.length === 0) return null
  // GoDo, KTE, 3/26/2022:  If the order is not valid, I could return
  // a valid flashcard if the username and topic are valid.  Consider
  // this and potentially implement it...

  const countByUsernameAndTopic = await db.user
    .findUnique({ where: { username } })
    .flashcards({ where: { topic } })
  // GoDo:  Figure out how to count via the prisma query

  return {
    flashcard: flashcardArray[0],
    count: countByUsernameAndTopic.length,
  }
}

export const User = {
  flashcards: (_obj, { root }: ResolverArgs<ReturnType<typeof user>>) =>
    db.user.findUnique({ where: { id: root.id } }).flashcards(),
}
