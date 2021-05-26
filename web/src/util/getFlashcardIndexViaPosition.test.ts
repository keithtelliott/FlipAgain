import getFlashcardIndexViaPosition from './getFlashcardIndexViaPosition'
import defaultFlashcards from 'src/util/defaultFlashcards'

const NOT_FOUND_FLAG = -1

describe('getFlashcardIndexViaPosition', () => {
  it('handles the happy path - it returns an appropriate index', () => {
    const INDEX_TO_FIND = 0
    const ORDER_NUMBER_TO_FIND = 1
    const flashcardAtIndexZero = defaultFlashcards[INDEX_TO_FIND]

    expect(
      getFlashcardIndexViaPosition(
        flashcardAtIndexZero.username,
        flashcardAtIndexZero.topic,
        ORDER_NUMBER_TO_FIND,
        defaultFlashcards
      )
    ).toBe(INDEX_TO_FIND)
  })

  it('handles a not-found flashcard by returning -1', () => {
    expect(
      getFlashcardIndexViaPosition(
        'not_a_username',
        'Not a Topic Name',
        10,
        defaultFlashcards
      )
    ).toBe(NOT_FOUND_FLAG)
  })

  it('handles a not-found flashcard by returning -1, when orderNumber is 1', () => {
    expect(
      getFlashcardIndexViaPosition(
        'not_a_username',
        'Not a Topic Name',
        1,
        defaultFlashcards
      )
    ).toBe(NOT_FOUND_FLAG)
  })
})
