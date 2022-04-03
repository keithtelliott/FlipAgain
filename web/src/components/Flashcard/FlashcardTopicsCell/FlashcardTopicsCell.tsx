import type { FindTopicsByUsername } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Text } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/layout'

interface SuccessPassThroughProps {
  username: string
}

export const QUERY = gql`
  query FindTopicsByUsername($username: String!) {
    topics: topicsByUsername(username: $username)
  }
`

export const Loading = () => <Text color="blue.600">Grabbing Topics...</Text>

export const Empty = () => <div>{'(No topics yet)'}</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  topics,
  username,
}: CellSuccessProps<FindTopicsByUsername> & SuccessPassThroughProps) => (
  <>
    {topics?.map((topic, index) => (
      <Text color="blue.600" key={topic + index}>
        <ChakraLink
          href={`/flashcard/${username}/${encodeURIComponent(topic)}`}
        >
          {topic}
        </ChakraLink>
      </Text>
    ))}
  </>
)
