import { Text, Link as ChakraLink, VStack } from '@chakra-ui/react'
import { useAuth } from '@redwoodjs/auth'
import FlashcardTopicsCell from 'src/components/Flashcard/FlashcardTopicsCell'
import FlashcardBox from 'src/components/Flashcard/FlashcardBox/FlashcardBox'

import usernameFromUserObject from 'src/util/usernameFromUserObject'

const FlashcardUserPage = ({ username }) => {
  const { currentUser, isAuthenticated } = useAuth()

  return (
    <>
      <FlashcardBox>
        <VStack margin="auto">
          {isAuthenticated && username === usernameFromUserObject(currentUser) && (
            <>
              <Text fontSize="xl" color="gray.600">
                Welcome {currentUser?.email}
              </Text>
              <Text fontSize="xl" color="blue.600">
                <ChakraLink color="blue.600" href={`/new-topic/${username}`}>
                  Create New Flashcard or Topic
                </ChakraLink>
              </Text>
            </>
          )}
          <Text fontSize="xl" color="gray.600">
            Topics by {username}:{' '}
          </Text>
          <FlashcardTopicsCell username={username} />
        </VStack>
      </FlashcardBox>
    </>
  )
}

export default FlashcardUserPage
