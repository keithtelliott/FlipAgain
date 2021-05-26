import filterFlashcardsByUsernameAndTopic from './filterFlashcardsByUsernameAndTopic'
import defaultFlashcards from 'src/util/defaultFlashcards'

describe('filterFlashcardsByUsernameAndTopic', () => {
  it('handles the happy path - it returns a filtered list', () => {
    const filteredFlashcards = filterFlashcardsByUsernameAndTopic(
      defaultFlashcards[0].username,
      defaultFlashcards[0].topic,
      defaultFlashcards
    )
    const filteredFlashcardsCheck = defaultFlashcards.filter(
      (flashcard) =>
        flashcard.username === defaultFlashcards[0].username &&
        flashcard.topic === defaultFlashcards[0].topic
    )

    expect(filteredFlashcards.length).toBe(filteredFlashcardsCheck.length)
    expect(filteredFlashcards[0].username).toBe(
      filteredFlashcardsCheck[0].username
    )
  })
})
