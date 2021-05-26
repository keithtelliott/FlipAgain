import FlashcardInterface from './FlashcardInterface'
// interface Flashcard {
//   readonly id: string
//   readonly back: string
//   readonly front: string
//   readonly topic: string
//   readonly username: string
// }

const filterFlashcardsByUsernameAndTopic = (
  username: string,
  topic: string,
  flashcards: FlashcardInterface[]
): FlashcardInterface[] =>
  flashcards.filter(
    (flashcard) =>
      flashcard.username === decodeURIComponent(username) &&
      flashcard.topic === decodeURIComponent(topic)
  )

export default filterFlashcardsByUsernameAndTopic
