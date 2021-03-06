import { ButtonGroup, IconButton } from '@chakra-ui/button'
import {
  AddIcon,
  MinusIcon,
  InfoIcon,
  EditIcon,
  LinkIcon,
  HamburgerIcon,
} from '@chakra-ui/icons'
import { Box, Stack } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import { Link, navigate, Route, routes } from '@redwoodjs/router'
import { useEffect, useState } from 'react'
import FlashcardInterface from 'src/util/FlashcardInterface'
import FlashcardBox from '../FlashcardBox/FlashcardBox'
import FlashcardButtonEdit from '../FlashcardButtonEdit/FlashcardButtonEdit'
import FlashcardButtonFlip from '../FlashcardButtonFlip/FlashcardButtonFlip'
import FlashcardButtonNew from '../FlashcardButtonNew/FlashcardButtonNew'
import FlashcardButtonNext from '../FlashcardButtonNext/FlashcardButtonNext'
import FlashcardButtonPrevious from '../FlashcardButtonPrevious/FlashcardButtonPrevious'
import FlashcardContent from '../FlashcardContent/FlashcardContent'
import FlashcardInfo from '../FlashcardInfo/FlashcardInfo'
import FlashcardSelectTopic from '../FlashcardSelectTopic/FlashcardSelectTopic'

const ZERO_FLASHCARD_LIST_LENGTH = 0 // If the stack of flashcards is empty, some buttons are disabled

const MAX_DELETE_CONFIRMATION_STRING_LENGTH = 25

interface Props {
  onDelete: any
  flashcard: FlashcardInterface
  orderNumber: number
  flashcardListLength: number
  topics: string[]
}

const truncate = (maxStringLength, text) => {
  let output = text
  if (text && text.length > maxStringLength) {
    output = output.substring(0, maxStringLength) + '...'
  }
  return output
}

const Flashcard: React.FunctionComponent<Props> = ({
  onDelete,
  flashcard,
  orderNumber,
  flashcardListLength,
  topics,
}) => {
  const [isShowingFront, setIsShowingFront] = useState(true)

  useEffect(() => {
    setIsShowingFront(true)
    // }, [])
  }, [orderNumber])

  const onDeleteClick = (id: string) => {
    if (
      confirm(
        `Are you sure you want to delete this flashcard?
          Topic:  ${truncate(
            MAX_DELETE_CONFIRMATION_STRING_LENGTH,
            flashcard?.topic
          )}
          Front:  ${truncate(
            MAX_DELETE_CONFIRMATION_STRING_LENGTH,
            flashcard?.front
          )}
          Back:  ${truncate(
            MAX_DELETE_CONFIRMATION_STRING_LENGTH,
            flashcard?.back
          )}`
      )
    ) {
      onDelete(id)
    }
  }

  // function onSwipeToPrev(
  //   orderNumber: number,
  //   username: string,
  //   topic: string
  // ): void
  /**
   * Navigate to the previous flashcard if one exists.  Otherwise do nothing.
   */
  function onSwipeToPrev(orderNumber: number, username: string, topic: string) {
    orderNumber > 1 &&
      // navigate(
      //   routes.flashcard({
      //     username: encodeURIComponent(username),
      //     topic: encodeURIComponent(topic),
      //     orderNumber: orderNumber - 1,
      //   })
      // )
      navigate(
        `/flashcard/${encodeURIComponent(username)}/${encodeURIComponent(
          topic
        )}/${orderNumber - 1}`
      )
  }

  /**
   * Navigate to the next flashcard if one exists.  Otherwise do nothing.
   */
  const onSwipeToNext = (
    orderNumber: number,
    flashcardListLength: number,
    username: string,
    topic: string
  ): void => {
    orderNumber < flashcardListLength &&
      navigate(
        `/flashcard/${encodeURIComponent(username)}/${encodeURIComponent(
          topic
        )}/${orderNumber + 1}`
      )
  }

  return (
    <FlashcardBox>
      <FlashcardContent
        front={flashcard.front}
        back={flashcard.back}
        isShowingFront={isShowingFront}
        setIsShowingFront={setIsShowingFront}
        onSwipeToPrev={() =>
          onSwipeToPrev(orderNumber, flashcard.username, flashcard.topic)
        }
        onSwipeToNext={() =>
          onSwipeToNext(
            orderNumber,
            flashcardListLength,
            flashcard.username,
            flashcard.topic
          )
        }
      />
      <Stack
        direction={['column', 'row']}
        align="center"
        justify="space-between"
        width="100%"
      >
        <FlashcardInfo
          topic={flashcard.topic}
          orderNumber={orderNumber}
          flashcardListLength={flashcardListLength}
        />
        <ButtonGroup variant="outline" colorScheme="blue" size="sm">
          <FlashcardButtonPrevious
            orderNumber={orderNumber}
            username={flashcard.username}
            topic={flashcard.topic}
          />
          <FlashcardButtonFlip
            onClick={() => setIsShowingFront(!isShowingFront)}
            isShowingFront={isShowingFront}
          />
          <FlashcardButtonNext
            orderNumber={orderNumber}
            flashcardListLength={flashcardListLength}
            username={flashcard.username}
            topic={flashcard.topic}
          />
        </ButtonGroup>
        <ButtonGroup variant="outline" colorScheme="blue" size="sm">
          <FlashcardButtonEdit
            isDisabled={flashcardListLength === ZERO_FLASHCARD_LIST_LENGTH}
            orderNumber={orderNumber}
            username={flashcard.username}
            topic={flashcard.topic}
          />
          <FlashcardButtonNew
            orderNumber={orderNumber}
            username={flashcard.username}
            topic={flashcard.topic}
          />
          <Tooltip label="Remove" background="blue.500">
            <IconButton
              isDisabled={flashcardListLength === ZERO_FLASHCARD_LIST_LENGTH}
              aria-label="Delete flashcard"
              icon={<MinusIcon />}
              onClick={() => onDeleteClick(flashcard.id)}
            />
          </Tooltip>
          <FlashcardSelectTopic
            defaultTopic={flashcard.topic}
            topics={topics}
            username={flashcard.username}
          />
        </ButtonGroup>
      </Stack>
    </FlashcardBox>
  )
}

export default Flashcard
