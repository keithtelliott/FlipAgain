import { useAuth } from '@redwoodjs/auth'
import NewFlashcardCell from 'src/components/Flashcard/NewFlashcardCell'
import usernameFromUserObject from 'src/util/usernameFromUserObject'

type NewTopicPageProps = {
  username: string
}

const NewTopicPage = ({ username }: NewTopicPageProps) => {
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

  console.log(
    'NewTopicPage:  about to call the NewFlashcardCell.  Here are the prop values...'
  )
  console.log('username: ', username)
  console.log('email: ', currentUser.email)
  console.log('name: ', currentUser.name)

  return (
    <NewFlashcardCell
      username={username}
      email={currentUser.email}
      name={currentUser?.name}
      isRequestingNewTopic={true}
      topic={undefined}
    />
  )
}

export default NewTopicPage
