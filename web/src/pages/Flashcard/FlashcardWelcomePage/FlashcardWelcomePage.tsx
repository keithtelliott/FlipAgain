import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Flashcard from 'src/components/Flashcard/Flashcard'
import defaultFlashcards from 'src/util/defaultFlashcards'

const FlashcardWelcomePage = ({ order }) => {
  return (
    <Flashcard
      username={'helloflipagain'}
      topic={'Welcome'}
      order={order}
      flashcard={defaultFlashcards[order - 1]} // I use 1 as the first numbered flashcard in the list, but javascript users zero as the numerical position of the first element in an array
      flashcardListLength={defaultFlashcards.length}
    />
  )
}

export default FlashcardWelcomePage
