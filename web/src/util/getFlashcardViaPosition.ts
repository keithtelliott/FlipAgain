import filterFlashcardsByUsernameAndTopic from './filterFlashcardsByUsernameAndTopic'

interface Flashcard {
  readonly id: string
  readonly back: string
  readonly front: string
  readonly topic: string
  readonly username: string
}

const getFlashcardViaPosition = (
  username: string,
  topic: string,
  orderNumber: number,
  flashcards: Flashcard[]
): Flashcard => {
  const filteredFlashcards = filterFlashcardsByUsernameAndTopic(
    username,
    topic,
    flashcards
  )
  if (
    filteredFlashcards.length === 0 ||
    orderNumber - 1 < 0 ||
    orderNumber - 1 > filteredFlashcards.length
  )
    throw new Error(`A flashcard is not available with the following position information:
      username: ${username}
      topic: ${topic}
      order number: ${orderNumber}`)

  return filteredFlashcards[orderNumber - 1]
}

export default getFlashcardViaPosition
