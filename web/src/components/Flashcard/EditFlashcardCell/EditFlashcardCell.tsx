// import type { EditFlashcardById } from 'types/graphql'
import {
  FindEditFlashcardPageByUsernameAndTopicAndOrder,
  UpdateFlashcardInput,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import FlashcardForm from 'src/components/Flashcard/FlashcardForm'
import Flashcard from 'src/components/Flashcard/Flashcard'

// GoDo, KTE, 3/12/2022:  Write a doc describing the type scheme in RW.  B/c I'm confused!

interface SuccessPassThroughProps {
  username: string
  topic: string
  order: number
}

export const QUERY = gql`
  query FindEditFlashcardPageByUsernameAndTopicAndOrder(
    $username: String!
    $topic: String!
    $order: Int!
  ) {
    flashcardPage: flashcardPageByUsernameAndTopicAndOrder(
      username: $username
      topic: $topic
      order: $order
    ) {
      flashcard {
        id
        topic
        front
        back
        orderNum
        userId
        createdAt
        updatedAt
      }
      # count
    }
    topics: topicsByUsername(username: $username)
  }
`

const UPDATE_FLASHCARD_MUTATION = gql`
  mutation UpdateFlashcardMutation($id: Int!, $input: UpdateFlashcardInput!) {
    updateFlashcard(id: $id, input: $input) {
      id
      topic
      front
      back
      orderNum
      userId
      createdAt
      updatedAt
    }
  }
`

/**
 * The flashcards are ordered by createdAt.  If a flashcard topic changes, I reset
 * createdAt so that it ends up at the end of the list in its new topic.
 *
 * @param originalTopic
 * @param newTopic
 * @param originalCreatedAt
 * @returns new date that will be used for the createdAt value
 */
const determineCreatedAt = (
  originalTopic: string,
  newTopic: string,
  originalCreatedAt: string
) => (originalTopic === newTopic ? originalCreatedAt : new Date())

export const Loading = ({ topic }) => (
  <>
    <FlashcardForm
      onSave={() => 'just loading'}
      topic={topic}
      topics={['Loading']}
      back=""
      front=""
      isRequestingNewTopic={false}
    />
  </>
)

export const Empty = ({ username, topic, order }) => (
  <>
    <Flashcard
      username={username}
      topic={topic}
      order={order}
      flashcard={{
        id: 1,
        front: 'Oops, your flashcard cannot be found',
        back: 'Enjoy FlipAgain!',
        topic,
        username,
      }}
      flashcardListLength={0}
    />
  </>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  flashcardPage,
  topics,
  username,
  topic,
  order,
}: CellSuccessProps<FindEditFlashcardPageByUsernameAndTopicAndOrder> &
  SuccessPassThroughProps) => {
  const [updateFlashcard, { loading, error }] = useMutation(
    UPDATE_FLASHCARD_MUTATION,
    {
      onCompleted: (data) => {
        console.log('editFC, here is data:  ', data)

        toast.success('Flashcard updated')

        topic === data.updateFlashcard.topic
          ? navigate(
              routes.flashcard({
                username: encodeURIComponent(username),
                topic: encodeURIComponent(data.updateFlashcard.topic),
                order,
              })
            )
          : navigate(
              routes.flashcardLast({
                username: encodeURIComponent(username),
                topic: encodeURIComponent(data.updateFlashcard.topic),
              })
            )
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  console.log('efc success, here are topics:  ', topics)

  const onSave = (input: UpdateFlashcardInput) => {
    console.log(
      'onSave, about to run updateFlashcard w/ the following input:  ',
      input
    )

    updateFlashcard({
      variables: {
        id: flashcardPage.flashcard.id,
        input: {
          ...input,
          createdAt: determineCreatedAt(
            topic,
            input.topic,
            flashcardPage.flashcard.createdAt
          ),
        },
      },
    })

    // createdAt: determineCreatedAt(
    //   topic,
    //   data.updateFlashcard.topic,
    //   flashcardPage.flashcard.createdAt
    // )
  }

  return (
    <FlashcardForm
      onSave={onSave}
      topic={topic}
      topics={topics}
      back={flashcardPage.flashcard.back}
      front={flashcardPage.flashcard.front}
      isRequestingNewTopic={false}
    />
  )
}
