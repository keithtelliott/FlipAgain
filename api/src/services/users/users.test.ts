import {
  flashcardByUsernameAndTopicAndOrder,
  flashcardPageByUsernameAndTopicAndLast,
  flashcardPageByUsernameAndTopicAndOrder,
  topicsByUsername,
  userByUsername,
  users,
} from './users'
import type { StandardScenario } from './users.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('users', () => {
  scenario('returns all users', async (scenario: StandardScenario) => {
    const result = await users()

    expect(result.length).toEqual(Object.keys(scenario.user).length)
  })
})

describe('userByUsername', () => {
  scenario('returns a user by username', async (scenario: StandardScenario) => {
    const result = await userByUsername({ username: 'keith' })
    console.log('ubu r:  ', result)

    expect(result.username).toEqual('keith')
  })
})

describe('flashcardPageByUsernameAndTopicAndOrder', () => {
  scenario(
    'returns appropriate flashcards for certain username/topic/skip/take combos',
    async (scenario: StandardScenario) => {
      const firstFlashcardPage = await flashcardPageByUsernameAndTopicAndOrder({
        username: 'keith',
        topic: 'Habits',
        order: 1,
      })
      // console.log(
      //   'Here is the flashcardPageByUsernameAndTopicAndOrder firstFlashcard:  ',
      //   firstFlashcardPage
      // )
      expect(firstFlashcardPage.flashcard.front).toEqual('Morning')
      expect(firstFlashcardPage.count).toEqual(3)

      const secondFlashcardPage = await flashcardPageByUsernameAndTopicAndOrder(
        {
          username: 'keith',
          topic: 'Habits',
          order: 2,
        }
      )
      // console.log(
      //   'Here is the flashcardPageByUsernameAndTopicAndOrder secondFlashcard:  ',
      //   secondFlashcardPage
      // )
      expect(secondFlashcardPage.flashcard.front).toEqual('Lunch')
      expect(secondFlashcardPage.count).toEqual(3)

      const orderValueThatIsGreaterThanFlashcardCount = 10
      const result2 = await flashcardPageByUsernameAndTopicAndOrder({
        username: 'keith',
        topic: 'Habits',
        order: orderValueThatIsGreaterThanFlashcardCount,
      })
      expect(result2).toBeNull()
    }
  )
})

describe('flashcardByUsernameAndTopicAndOrder', () => {
  scenario(
    'returns appropriate flashcards for certain username/topic/skip/take combos',
    async (scenario: StandardScenario) => {
      const firstFlashcard = await flashcardByUsernameAndTopicAndOrder({
        username: 'keith',
        topic: 'Habits',
        order: 1,
      })
      expect(firstFlashcard.front).toEqual('Morning')

      const secondFlashcard = await flashcardByUsernameAndTopicAndOrder({
        username: 'keith',
        topic: 'Habits',
        order: 2,
      })
      expect(secondFlashcard.front).toEqual('Lunch')

      const orderValueThatIsGreaterThanFlashcardCount = 10
      const result2 = await flashcardByUsernameAndTopicAndOrder({
        username: 'keith',
        topic: 'Habits',
        order: orderValueThatIsGreaterThanFlashcardCount,
      })
      expect(result2).toBeNull()
    }
  )
})

describe('topicsByUsername', () => {
  scenario(
    'returns appropriate unique topics for a certain username',
    async (scenario: StandardScenario) => {
      const topics = await topicsByUsername({
        username: 'keith',
      })
      // console.log('topics:  ', topics)

      expect(topics.length).toEqual(4)

      expect(
        (
          await topicsByUsername({
            username: 'this-username-does-not-exist',
          })
        ).length
      ).toEqual(0)
    }
  )
})

// GoDo, KTE, 3/15/2022:  Set the createdAt field on creation so that I can
// appropriately test the chronological order.  At the moment, the flashcards
// are all created at the same instant, so the ordering by createdAt does not
// work.
describe('flashcardPageByUsernameAndTopicAndLast', () => {
  scenario(
    'returns appropriate last flashcard.  BROKEN until I work out the the createdAt value in the mock data',
    async (scenario: StandardScenario) => {
      const lastFlashcardPage = await flashcardPageByUsernameAndTopicAndLast({
        username: 'keith',
        topic: 'Habits',
      })
      expect(lastFlashcardPage.flashcard.front).toEqual('Dinner')

      const lastFlashcardPageNotFound =
        await flashcardPageByUsernameAndTopicAndLast({
          username: 'doesNotExist',
          topic: 'No a Topic',
        })
      expect(lastFlashcardPageNotFound).toBeNull()
    }
  )
})
