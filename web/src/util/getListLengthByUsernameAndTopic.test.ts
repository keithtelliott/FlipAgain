import getListLengthByUsernameAndTopic from './getListLengthByUsernameAndTopic'
import defaultFlashcards from 'src/util/defaultFlashcards'

describe('getListLengthByUsernameAndTopic', () => {
  it('handles the happy path - it returns an appropriate length', () => {
    const EXPECTED_LENGTH = 10
    const flashcardAtIndexZero = defaultFlashcards[0]

    expect(
      getListLengthByUsernameAndTopic(
        flashcardAtIndexZero.username,
        flashcardAtIndexZero.topic,
        defaultFlashcards
      )
    ).toBe(EXPECTED_LENGTH)
  })

  it('handles a topic that does not exist in the array - it returns zero', () => {
    const EXPECTED_LENGTH = 0

    expect(
      getListLengthByUsernameAndTopic(
        'not a username that exists',
        'not a topic that exists',
        defaultFlashcards
      )
    ).toBe(EXPECTED_LENGTH)
  })
})
