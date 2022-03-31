import { Text, Link as ChakraLink } from '@chakra-ui/react'
import { useAuth } from '@redwoodjs/auth'
import FlashcardTopicsCell from 'src/components/Flashcard/FlashcardTopicsCell'
import usernameFromUserObject from 'src/util/usernameFromUserObject'

const FlashcardUserPage = ({ username }) => {
  const { currentUser, isAuthenticated } = useAuth()

  return (
    <>
      {isAuthenticated && username === usernameFromUserObject(currentUser) && (
        <>
          <Text>Welcome {currentUser?.email}</Text>
          <Text color="blue.600">
            <ChakraLink color="blue.600" href={`/new-topic/${username}`}>
              Create New Flashcard or Topic
            </ChakraLink>
          </Text>
          <Text color="blue.600">Your Topics...</Text>
        </>
      )}
      <FlashcardTopicsCell username={username} />
    </>
  )
}

export default FlashcardUserPage
