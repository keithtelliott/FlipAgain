import type { FindFlashcardPageByUsernameAndTopicAndOrder } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Flashcard from 'src/components/Flashcard/Flashcard'

export const QUERY = gql`
  query FindFlashcardPageByUsernameAndTopicAndOrder(
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
      count
    }
  }
`

export const Loading = ({ username, topic, order }) => (
  <>
    <Flashcard
      username={username}
      topic={topic}
      order={order}
      flashcard={{ id: 1, front: '', back: '', topic, username }}
      flashcardListLength={0}
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
        front: 'Oops, your flashcard cannot be found.  You can create one!',
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
  order,
  username,
  topic,
}: CellSuccessProps<FindFlashcardPageByUsernameAndTopicAndOrder> & {
  username: string
  order: number
  topic: string
}) => {
  return (
    <>
      <Flashcard
        username={username}
        topic={topic}
        order={order}
        flashcard={flashcardPage.flashcard}
        flashcardListLength={flashcardPage.count}
      />
    </>
  )
}
