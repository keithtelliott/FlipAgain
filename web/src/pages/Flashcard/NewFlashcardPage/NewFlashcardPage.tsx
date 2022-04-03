import { useAuth } from '@redwoodjs/auth'
import NewFlashcardCell from 'src/components/Flashcard/NewFlashcardCell'
import usernameFromUserObject from 'src/util/usernameFromUserObject'

type NewFlashcardPageProps = {
  username: string
  topic: string
}

const NewFlashcardPage = ({ username, topic }: NewFlashcardPageProps) => {
  const { isAuthenticated, currentUser } = useAuth()

  if (!isAuthenticated)
    return (
      <p>
        Authentication Error: You must be logged-in to create topics or
        flashcards.
      </p>
    )

  if (username !== usernameFromUserObject(currentUser)) {
    return (
      <p>
        Authentication Error: You can only create topics or flashcards for your
        own account. You are logged in as {usernameFromUserObject(currentUser)},
        but attempting to create an item for {username}.
      </p>
    )
  }

  // GoDo, KTE, 3/30/2022:  Gracefully handle no internet connection
  return (
    <NewFlashcardCell
      username={username}
      email={currentUser.email} // GoDo, KTE, 3/30/2022:  Pull this via a function & error check
      name={currentUser?.nameThisIsWrongItsInASubObject} // GoDo, KTE, 3/30/2022:  Pull this via a function & error check
      isRequestingNewTopic={false}
      topic={decodeURIComponent(topic)}
    />
  )
}

export default NewFlashcardPage
