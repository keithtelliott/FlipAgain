// import type { FindFlashcardById } from 'types/graphql'
import type { FindFlashcardPageByUsernameAndTopicAndLast } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Flashcard from 'src/components/Flashcard/Flashcard'

export const QUERY = gql`
  query FindFlashcardPageByUsernameAndTopicAndLast(
    $username: String!
    $topic: String!
  ) {
    flashcardPage: flashcardPageByUsernameAndTopicAndLast(
      username: $username
      topic: $topic
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

export const Loading = ({ username, topic }) => (
  <>
    <Flashcard
      username={username}
      topic={topic}
      order={1}
      flashcard={{ id: 1, front: '', back: '', topic, username }}
      flashcardListLength={1}
    />
  </>
)

export const Empty = ({ username, topic }) => (
  <>
    <Flashcard
      username={username}
      topic={topic}
      order={0}
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
  username,
  topic,
}: CellSuccessProps<FindFlashcardPageByUsernameAndTopicAndLast> & {
  username: string
  topic: string
}) => {
  return (
    <>
      <Flashcard
        username={username}
        topic={topic}
        order={flashcardPage.count}
        flashcard={flashcardPage.flashcard}
        flashcardListLength={flashcardPage.count}
      />
    </>
  )
}
