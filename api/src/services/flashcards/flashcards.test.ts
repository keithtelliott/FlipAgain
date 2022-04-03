import {
  flashcards,
  flashcard,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
} from './flashcards'
import type { StandardScenario } from './flashcards.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('flashcards', () => {
  scenario('returns all flashcards', async (scenario: StandardScenario) => {
    const result = await flashcards()

    expect(result.length).toEqual(Object.keys(scenario.flashcard).length)
  })

  scenario('returns a single flashcard', async (scenario: StandardScenario) => {
    const result = await flashcard({ id: scenario.flashcard.one.id })

    expect(result).toEqual(scenario.flashcard.one)
  })

  scenario('creates a flashcard', async (scenario: StandardScenario) => {
    const result = await createFlashcard({
      input: { topic: 'String', userId: scenario.flashcard.two.userId },
    })

    expect(result.topic).toEqual('String')
    expect(result.userId).toEqual(scenario.flashcard.two.userId)
  })

  scenario('updates a flashcard', async (scenario: StandardScenario) => {
    const original = await flashcard({ id: scenario.flashcard.one.id })
    const result = await updateFlashcard({
      id: original.id,
      input: { topic: 'String2' },
    })

    expect(result.topic).toEqual('String2')
  })

  scenario('deletes a flashcard', async (scenario: StandardScenario) => {
    const original = await deleteFlashcard({ id: scenario.flashcard.one.id })
    const result = await flashcard({ id: original.id })

    expect(result).toEqual(null)
  })
})
