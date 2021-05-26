import { navigate } from '@redwoodjs/router'
import filterFlashcardsByUsernameAndTopic from 'src/util/filterFlashcardsByUsernameAndTopic'
import useLocalFlashcards from 'src/util/useLocalFlashcards'
import validateOrderNumber from 'src/util/validateOrderNumber'
import Flashcard from '../Flashcard/Flashcard'
import FlashcardInterface from 'src/util/FlashcardInterface'
import getTopicsByUsername from 'src/util/getTopicsByUsername'

interface SuccessProps {
  onDelete: (id: string) => void
  flashcards: FlashcardInterface[]
  validatedOrderNumber: number
  topics: string[]
}

interface FlashcardAppProps {
  username: string
  topic: string
  orderNumber?: number
  goOrderLast?: boolean
}

const createEmptyFlashcard = (
  username: string,
  topic: string
): FlashcardInterface => ({
  id: 'default_id',
  front: `Oops, no flashcards exist for the topic '${topic}'.  You can create one!`,
  back: `Enjoy FlipAgain!`,
  topic,
  username,
})

const EMPTY_ORDER_NUMBER = 0
const EMPTY_FLASHCARD_LIST_LENGTH = 0
const DEFAULT_ORDER_NUMBER = 1
const ORDER_NUMBER_NOT_DEFINED = -1
export const DEFAULT_USERNAME = 'local'
const DEFAULT_TOPIC = 'Intro'

const determineOrderNumber = (
  orderNumber: number,
  goOrderLast: boolean,
  singleTopicListLength: number,
  defaultOrderNumber: number
): number =>
  goOrderLast
    ? singleTopicListLength
    : validateOrderNumber(
        orderNumber,
        singleTopicListLength,
        defaultOrderNumber
      )

const Empty = ({ username, topic, topics }) => {
  return (
    <Flashcard
      onDelete={undefined}
      flashcard={createEmptyFlashcard(username, topic)}
      orderNumber={EMPTY_ORDER_NUMBER}
      flashcardListLength={EMPTY_FLASHCARD_LIST_LENGTH}
      topics={topics}
    />
  )
}

const Success = ({
  onDelete,
  flashcards,
  validatedOrderNumber,
  topics,
}: SuccessProps) => {
  return (
    <Flashcard
      onDelete={onDelete}
      flashcard={flashcards[validatedOrderNumber - 1]}
      orderNumber={validatedOrderNumber}
      flashcardListLength={flashcards.length}
      topics={topics}
    />
  )
}

const FlashcardApp = ({
  username = DEFAULT_USERNAME,
  topic = DEFAULT_TOPIC,
  orderNumber = ORDER_NUMBER_NOT_DEFINED,
  goOrderLast = false,
}: FlashcardAppProps) => {
  const [flashcards, setLocalFlashcards, isPersistent] = useLocalFlashcards()

  const filteredFlashcards = filterFlashcardsByUsernameAndTopic(
    username,
    topic,
    flashcards
  )

  const validatedOrderNumber = determineOrderNumber(
    orderNumber,
    goOrderLast,
    filteredFlashcards.length,
    DEFAULT_ORDER_NUMBER
  )

  const topics = getTopicsByUsername(username, flashcards)

  const onDelete = (id: string) => {
    setLocalFlashcards(flashcards.filter((flashcard) => flashcard.id !== id))
    const newOrderNumber = validatedOrderNumber - 1
    // routes.flashcard({
    //   username: encodeURIComponent(username),
    //   topic: encodeURIComponent(topic),
    //   orderNumber: orderNumber,
    // })
    // GoDo, KTE, 4/30/2021:  Log a GitHub issue, noting that zero is not recognized as an Int.
    //                        The above commented-out code does not work property when a zero
    //                        orderNumber is provided (it creates a query param instead of a URL
    //                        param).  But, the following works...
    navigate(`/flashcard/${username}/${topic}/${newOrderNumber}`)
  }

  return filteredFlashcards.length === 0 ? (
    <Empty username={username} topic={topic} topics={topics} />
  ) : (
    <Success
      onDelete={onDelete}
      flashcards={filteredFlashcards}
      validatedOrderNumber={validatedOrderNumber}
      topics={topics}
    />
  )
}

export default FlashcardApp
