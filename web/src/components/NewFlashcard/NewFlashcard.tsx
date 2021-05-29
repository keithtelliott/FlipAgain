import { v4 as uuidv4 } from 'uuid'
import useLocalFlashcards from 'src/util/useLocalFlashcards'
import FlashcardForm from '../FlashcardForm/FlashcardForm'
import * as Ramda from 'ramda'
import { navigate, routes } from '@redwoodjs/router'
import getFlashcardIndexViaPosition from 'src/util/getFlashcardIndexViaPosition'
import getListLengthByUsernameAndTopic from 'src/util/getListLengthByUsernameAndTopic'
import FlashcardInterface from 'src/util/FlashcardInterface'
import getTopicsByUsername from 'src/util/getTopicsByUsername'
import validateOrderNumber from 'src/util/validateOrderNumber'
import DEFAULT_USERNAME from '../FlashcardApp/FlashcardApp'

const ORDER_NUMBER_NOT_DEFINED = -1
const ORDER_NUMBER_INCREMENT = 1

interface NewFlashcardProps {
  username: string
  topic?: string
  originatingOrderNumber?: number
  isRequestingNewTopic?: boolean
}

/**
 * If a flashcard is being added by a user while browsing an existing stack, and
 * the topic is the same, then the flashcard is added immediately after the last
 * viewed flashcard.
 *
 * Otherwise, the flashcard is added to the end of stack.  It could be a brand
 * new stack, or an existing stack.
 */
const NewFlashcard: React.FunctionComponent<NewFlashcardProps> = ({
  username = DEFAULT_USERNAME,
  topic,
  originatingOrderNumber = ORDER_NUMBER_NOT_DEFINED,
  isRequestingNewTopic,
}) => {
  const [
    localFlashcards,
    setLocalFlashcards,
    isPersistent,
  ] = useLocalFlashcards()

  console.log('NewFlashcard, here is isPersistent:  ', isPersistent)

  const decodedUsername = decodeURIComponent(username)
  const decodedUrlTopic: string | undefined =
    topic === undefined || topic === '' ? undefined : decodeURIComponent(topic)

  const topics = getTopicsByUsername(decodedUsername, localFlashcards)

  /**
   * This function creates a new flashcard object, adds it to the localFlashcards
   * array, saves that array to local storage, then navigates to the new flashcard.
   *
   * One complication to keep in mind...
   *
   * If the user is adding a new flashcard while browsing an existing stack, the
   * new flashcard will be next to the last one that the user was browsing.  I
   * define this to be the case if the topic fom the URL is the same as the topic
   * from the form, and the originatingOrderNumber is defined.
   *
   * Otherwise, the new flashcard is added to the end of the stack.
   */
  const onSave = (topicFromForm: string, front: string, back: string): void => {
    const newFlashcard: FlashcardInterface = {
      id: uuidv4(),
      front,
      back,
      topic: topicFromForm,
      username: decodedUsername,
    }
    console.log('newFC, onSave, topicFromForm... ', topicFromForm)
    console.log('newFC, onSave, decodedUrlTopc... ', decodedUrlTopic)

    if (
      topicFromForm === decodedUrlTopic &&
      originatingOrderNumber !== ORDER_NUMBER_NOT_DEFINED
    ) {
      const singleTopicListLength = getListLengthByUsernameAndTopic(
        decodedUsername,
        topicFromForm,
        localFlashcards
      )
      const defaultOrderNumber = singleTopicListLength // add to end of list if originatingOrderNumber is invalid

      const validatedOriginatingOrderNumber = validateOrderNumber(
        originatingOrderNumber,
        singleTopicListLength,
        defaultOrderNumber
      )

      const indexOfOriginatingFlashcard = getFlashcardIndexViaPosition(
        decodedUsername,
        topicFromForm,
        validatedOriginatingOrderNumber,
        localFlashcards
      )

      setLocalFlashcards(
        Ramda.insert(
          indexOfOriginatingFlashcard + ORDER_NUMBER_INCREMENT,
          newFlashcard,
          localFlashcards
        )
      )

      const newOrderNumber =
        validatedOriginatingOrderNumber + ORDER_NUMBER_INCREMENT

      navigate(
        `/flashcard/${username}/${encodeURIComponent(
          topicFromForm
        )}/${newOrderNumber}`
      )
    } else {
      setLocalFlashcards(Ramda.append(newFlashcard, localFlashcards))

      navigate(
        `/flashcard/${username}/${encodeURIComponent(topicFromForm)}/last`
        // Go-Do, KTE, 5/23/2021:  If a brand new topic is created, then 'last'
        // in the URL looks funny.  So, if it's the first in the list, go to a
        // friendlier-looking URL
      )
    }
  }

  return (
    <FlashcardForm
      topic={decodedUrlTopic}
      topics={topics}
      onSave={onSave}
      isRequestingNewTopic={isRequestingNewTopic}
      isPersistent={isPersistent}
    />
  )
}

export default NewFlashcard
