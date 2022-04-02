import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import usernameFromUserObject from 'src/util/usernameFromUserObject'
// import { Link, routes } from '@redwoodjs/router'
// import { MetaTags } from '@redwoodjs/web'
import Flashcard from 'src/components/Flashcard/Flashcard'
import defaultFlashcards from 'src/util/defaultFlashcards'

const HomePage = () => {
  const { isAuthenticated, currentUser } = useAuth()

  if (isAuthenticated)
    navigate(
      routes.flashcardUser({ username: usernameFromUserObject(currentUser) })
    )

  return (
    <Flashcard
      username={'FlipAgain'}
      topic={'Welcome'}
      order={1}
      flashcard={defaultFlashcards[0]}
      flashcardListLength={defaultFlashcards.length}
    />
  )
}

export default HomePage
