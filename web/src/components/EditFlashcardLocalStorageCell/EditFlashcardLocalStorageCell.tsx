import { navigate, routes } from '@redwoodjs/router'
import getFlashcardViaPosition from 'src/util/getFlashcardViaPosition'
import FlashcardForm from '../FlashcardForm/FlashcardForm'

import * as Ramda from 'ramda'
import useLocalFlashcards from 'src/util/useLocalFlashcards'
import FlashcardInterface from 'src/util/FlashcardInterface'
import getTopicsByUsername from 'src/util/getTopicsByUsername'

// const Loading = () => <div>Loading...</div>

interface EditFlashcardLocalStorageCellProps {
  username: string
  topic: string
  orderNumber: number
}

interface SuccessProps {
  localFlashcards: FlashcardInterface[]
  setLocalFlashcards: (localFlashcardsUpdated: FlashcardInterface[]) => void
  flashcard: FlashcardInterface
  topics: string[]
  orderNumber: number
}

interface FailureProps {
  error: Error
}

const Failure: React.FunctionComponent<FailureProps> = ({ error }) => (
  <p>Oops, there was a failure! {error?.message}</p>
)

const Success: React.FunctionComponent<SuccessProps> = ({
  localFlashcards,
  setLocalFlashcards,
  flashcard,
  topics,
  orderNumber,
}) => {
  const onSave = (topic: string, front: string, back: string): void => {
    const updatedFlashcard = { ...flashcard, topic, front, back }
    const localFlashcardsUpdated = Ramda.update(
      Ramda.findIndex(Ramda.propEq('id', flashcard.id), localFlashcards),
      updatedFlashcard,
      localFlashcards
    )
    setLocalFlashcards(localFlashcardsUpdated)

    navigate(
      `/flashcard/${encodeURIComponent(
        updatedFlashcard.username
      )}/${encodeURIComponent(updatedFlashcard.topic)}/${orderNumber}`
    ) // Go-Do, KTE, 5/10/2021:  Work through type issue and get the following code working...
    //   routes.flashcard({
    //     username: encodeURIComponent(updatedFlashcard.username),
    //     topic: encodeURIComponent(updatedFlashcard.topic),
    //     orderNumber: orderNumber,
    //   })
    // )
  }

  return (
    <FlashcardForm
      topic={flashcard.topic}
      topics={topics}
      back={flashcard.back}
      front={flashcard.front}
      onSave={onSave}
    />
  )
}

const EditFlashcardLocalStorageCell: React.FC<EditFlashcardLocalStorageCellProps> = ({
  username,
  topic,
  orderNumber,
}) => {
  const [
    localFlashcards,
    setLocalFlashcards,
    isPersistent,
  ] = useLocalFlashcards()
  let flashcard
  let topics

  try {
    flashcard = getFlashcardViaPosition(
      username,
      topic,
      orderNumber,
      localFlashcards
    )
    topics = getTopicsByUsername(username, localFlashcards)
  } catch (error) {
    return <Failure error={error} />
  }
  return (
    <Success
      localFlashcards={localFlashcards}
      setLocalFlashcards={setLocalFlashcards}
      flashcard={flashcard}
      topics={topics}
      orderNumber={orderNumber}
    />
  )
}

export default EditFlashcardLocalStorageCell
