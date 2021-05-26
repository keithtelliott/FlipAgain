import Flashcard from './Flashcard'
import defaultFlashcards from 'src/util/defaultFlashcards'

const FLASHCARD = defaultFlashcards[1]

export const middle = () => {
  return (
    <Flashcard flashcard={FLASHCARD} orderNumber={2} flashcardListLength={9} />
  )
}

export const first = () => {
  return (
    <Flashcard flashcard={FLASHCARD} orderNumber={1} flashcardListLength={9} />
  )
}

export const last = () => {
  return (
    <Flashcard flashcard={FLASHCARD} orderNumber={9} flashcardListLength={9} />
  )
}
export default { title: 'Components/Flashcard' }
