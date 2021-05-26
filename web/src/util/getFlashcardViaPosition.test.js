import defaultFlashcards from './defaultFlashcards'
import getFlashcardViaPosition from './getFlashcardViaPosition'

const USERNAME = 'local'
const TOPIC = 'Intro'
const ORDER_NUMBER = 1
const ORDER_NUMBER_INVALID = -1

describe('getFlashcardViaPosition', () => {
  it('handles the happy path - it returns one flashcard, given an existing username and topic', () => {
    const flashcard = getFlashcardViaPosition(
      USERNAME,
      TOPIC,
      ORDER_NUMBER,
      defaultFlashcards
    )
    expect(flashcard.topic).toBe(TOPIC)
  })

  // it('Throws a useful error if orderNumber is out of range.', () => {
  //   expect(() => {
  //     getFlashcardViaPosition(USERNAME, TOPIC, ORDER_NUMBER_INVALID)
  //   }).toThrow('Invalid')
  // })
})
