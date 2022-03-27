import { CellFailureProps, CellSuccessProps, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import FlashcardForm from 'src/components/Flashcard/FlashcardForm'
// import { FindTopicsByUsername } from 'types/graphql'
import { FindTopicsAndUserByUsername } from 'types/graphql'
import Flashcard from 'src/components/Flashcard/Flashcard'

interface SuccessPassThroughProps {
  username: string
  topic: string
  isRequestingNewTopic?: boolean
}

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'no-cache' }
}

export const QUERY = gql`
  query FindTopicsAndUserByUsername($username: String!) {
    topics: topicsByUsername(username: $username)
    user: userByUsername(username: $username) {
      id
    }
  }
`

const CREATE_FLASHCARD_MUTATION = gql`
  mutation CreateFlashcardMutation($input: CreateFlashcardInput!) {
    createFlashcard(input: $input) {
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

export const Loading = ({ topic, isRequestingNewTopic }) => (
  <>
    <FlashcardForm
      onSave={() => 'just loading'}
      topic={topic}
      topics={['Loading']}
      back=""
      front=""
      isRequestingNewTopic={isRequestingNewTopic}
    />
  </>
)

// export const Empty = ({ username, topic }) => (
//   <>
//     <Flashcard
//       username={username}
//       topic={topic}
//       order={0}
//       flashcard={{
//         id: 1,
//         front: 'Oops, is empty hit??  your username and topics cannot be found',
//         back: 'Enjoy FlipAgain!',
//         topic,
//         username,
//       }}
//       flashcardListLength={0}
//     />
//   </>
// )

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({
  user,
  topics,
  username,
  topic,
  isRequestingNewTopic = false,
}: CellSuccessProps<FindTopicsAndUserByUsername> & SuccessPassThroughProps) => {
  const [createFlashcard, { loading, error }] = useMutation(
    CREATE_FLASHCARD_MUTATION,
    {
      onCompleted: (data) => {
        console.log('running onCompleted.  Here is the data object: ', data)

        toast.success('Flashcard created')
        navigate(
          routes.flashcardLast({
            username: username,
            topic: data.createFlashcard.topic,
            // topic: encodeURIComponent(data.createFlashcard.topic),
            // GoDo, KTE, 3/15/2022:  Check the source code.  are the URL parameters encoded automagically?
          })
        )
      },
      onError: (error) => {
        toast.error(error.message)
        // GoDo, KTE, 3/15/2022:  Review error handling.  I was getting an error in the dev server output, but this pop-up was not appearing
      },
    }
  )

  const onSave = (input) => {
    console.log('running nfc onSave, here is the input:  ', input)

    createFlashcard({ variables: { input: { userId: user.id, ...input } } })
  }

  console.log(
    'NewFCCell.  Here is isRequestingNewTopic:  ',
    isRequestingNewTopic
  )

  console.log('NewFCCell.  Here are topics:  ', topics)

  return user === null ? (
    <Flashcard
      username={username}
      topic={topic}
      order={0}
      flashcard={{
        id: 1,
        front: 'Oops, username ' + username + ' cannot be found',
        back: 'Enjoy FlipAgain!',
        topic,
        username,
      }}
      flashcardListLength={0}
    />
  ) : (
    <FlashcardForm
      onSave={onSave}
      topic={topic}
      topics={topics}
      back=""
      front=""
      isRequestingNewTopic={isRequestingNewTopic}
      // onSave={onSave} loading={loading} error={error}
    />
  )
}
