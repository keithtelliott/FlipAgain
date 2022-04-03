import { ButtonGroup, IconButton } from '@chakra-ui/button'
import { MinusIcon } from '@chakra-ui/icons'
import { Box, Stack } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import { Link, navigate, Route, routes } from '@redwoodjs/router'
import { useEffect, useState } from 'react'
import { useMutation } from '@apollo/client'

import FlashcardInterface from 'src/util/FlashcardInterface'

import FlashcardBox from 'src/components/Flashcard/FlashcardBox/FlashcardBox'
import FlashcardButtonFlip from 'src/components/Flashcard/FlashcardButtonFlip/FlashcardButtonFlip'
import FlashcardButtonNext from 'src/components/Flashcard/FlashcardButtonNext/FlashcardButtonNext'
import FlashcardButtonPrevious from 'src/components/Flashcard/FlashcardButtonPrevious/FlashcardButtonPrevious'
import FlashcardContent from 'src/components/Flashcard/FlashcardContent/FlashcardContent'
import FlashcardInfo from 'src/components/Flashcard/FlashcardInfo/FlashcardInfo'
import FlashcardButtonEdit from 'src/components/Flashcard/FlashcardButtonEdit/FlashcardButtonEdit'
import FlashcardButtonNew from 'src/components/Flashcard/FlashcardButtonNew/FlashcardButtonNew'
import FlashcardSelectTopic from 'src/components/Flashcard/FlashcardSelectTopic/FlashcardSelectTopic'
import { useAuth } from '@redwoodjs/auth'
import usernameFromUserObject from 'src/util/usernameFromUserObject'

const ZERO_FLASHCARD_LIST_LENGTH = 0 // If the stack of flashcards is empty, some buttons are disabled

const MAX_DELETE_CONFIRMATION_STRING_LENGTH = 25

const ONE_FLASHCARD_REMOVED = 1 // When deleting flashcards, we decrement the order by one, to navigate to the prior flashcard

const DELETE_FLASHCARD_MUTATION = gql`
  mutation DeleteFlashcardMutation($id: Int!) {
    deleteFlashcard(id: $id) {
      id
    }
  }
`

interface Props {
  username: string
  topic: string
  order: number
  flashcard: FlashcardInterface
  flashcardListLength: number
}

const truncate = (maxStringLength, text) => {
  let output = text
  if (text && text.length > maxStringLength) {
    output = output.substring(0, maxStringLength) + '...'
  }
  return output
}

const Flashcard: React.FunctionComponent<Props> = ({
  username,
  topic,
  order,
  flashcard,
  flashcardListLength,
}) => {
  const [isShowingFront, setIsShowingFront] = useState(true)
  const { isAuthenticated, currentUser } = useAuth()
  const isAuthorizedToEditAddDelete =
    isAuthenticated && username === usernameFromUserObject(currentUser)

  useEffect(() => {
    setIsShowingFront(true)
  }, [order])

  const [deleteFlashcard] = useMutation(DELETE_FLASHCARD_MUTATION, {
    onCompleted: () => {
      console.log('deleteFlashcard.onCompleted, about to navigate...')

      // toast.success('Flashcard deleted')
      navigate(
        routes.flashcard({
          username: username,
          topic: encodeURIComponent(topic),
          order: order - ONE_FLASHCARD_REMOVED,
        })
      )
    },
    onError: (error) => {
      console.log(error.message)
      // GoDo, KTE, 3/17/2022:  Consider error handling...
      // toast.error(error.message)
    },
  })

  const onDeleteClick = (id: number) => {
    if (
      confirm(
        `Are you sure you want to delete this flashcard?
          Topic:  ${truncate(
            MAX_DELETE_CONFIRMATION_STRING_LENGTH,
            flashcard.topic
          )}
          Front:  ${truncate(
            MAX_DELETE_CONFIRMATION_STRING_LENGTH,
            flashcard.front
          )}
          Back:  ${truncate(
            MAX_DELETE_CONFIRMATION_STRING_LENGTH,
            flashcard.back
          )}`
      )
    ) {
      deleteFlashcard({ variables: { id } })
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
  function onSwipeToPrev(order: number, username: string, topic: string) {
    order > 1 &&
      navigate(
        routes.flashcard({
          username: encodeURIComponent(username),
          topic: encodeURIComponent(topic),
          order: order - 1,
        })
      )
    // navigate(
    //   `/flashcard/${encodeURIComponent(username)}/${encodeURIComponent(
    //     topic
    //   )}/${orderNumber - 1}`
    // )
  }

  /**
   * Navigate to the next flashcard if one exists.  Otherwise do nothing.
   */
  const onSwipeToNext = (
    order: number,
    flashcardListLength: number,
    username: string,
    topic: string
  ): void => {
    order < flashcardListLength &&
      navigate(
        `/flashcard/${encodeURIComponent(username)}/${encodeURIComponent(
          topic
        )}/${order + 1}`
      )
  }

  return (
    <FlashcardBox>
      <FlashcardContent
        front={flashcard.front}
        back={flashcard.back}
        isShowingFront={isShowingFront}
        setIsShowingFront={setIsShowingFront}
        onSwipeToPrev={() => onSwipeToPrev(order, username, topic)}
        onSwipeToNext={() =>
          onSwipeToNext(order, flashcardListLength, username, topic)
        }
      />
      <Stack
        direction={['column', 'row']}
        align="center"
        justify="space-between"
        width="100%"
      >
        <FlashcardInfo
          topic={topic}
          order={order}
          flashcardListLength={flashcardListLength}
        />
        <ButtonGroup variant="outline" colorScheme="blue" size="sm">
          <FlashcardButtonPrevious
            order={order}
            flashcardListLength={flashcardListLength}
            username={username}
            topic={topic}
          />
          <FlashcardButtonFlip
            onClick={() => setIsShowingFront(!isShowingFront)}
            isShowingFront={isShowingFront}
          />
          <FlashcardButtonNext
            order={order}
            flashcardListLength={flashcardListLength}
            username={username}
            topic={topic}
          />
        </ButtonGroup>
        <ButtonGroup variant="outline" colorScheme="blue" size="sm">
          {isAuthorizedToEditAddDelete && (
            <>
              <FlashcardButtonEdit
                isDisabled={flashcardListLength === ZERO_FLASHCARD_LIST_LENGTH}
                order={order}
                username={username}
                topic={topic}
              />
              <FlashcardButtonNew username={username} topic={topic} />

              <Tooltip label="Remove" background="blue.500">
                <IconButton
                  isDisabled={
                    flashcardListLength === ZERO_FLASHCARD_LIST_LENGTH
                  }
                  aria-label="Delete flashcard"
                  icon={<MinusIcon />}
                  onClick={() => onDeleteClick(flashcard.id)}
                />
              </Tooltip>
            </>
          )}

          <FlashcardSelectTopic
            // defaultTopic={flashcard.topic}
            // topics={topics}
            username={username}
          />
        </ButtonGroup>
      </Stack>
    </FlashcardBox>
  )
}

export default Flashcard
