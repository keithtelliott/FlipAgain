import { useAuth } from '@redwoodjs/auth'
import usernameFromUserObject from 'src/util/usernameFromUserObject'
import Flashcard from 'src/components/Flashcard/Flashcard'
import FlashcardBox from 'src/components/Flashcard/FlashcardBox/FlashcardBox'
import FlashcardTopicsCell from 'src/components/Flashcard/FlashcardTopicsCell'
import defaultFlashcards from 'src/util/defaultFlashcards'
import { Text, VStack, Link as ChakraLink } from '@chakra-ui/react'

const HomePage = () => {
  const { isAuthenticated, currentUser } = useAuth()

  return isAuthenticated ? (
    <FlashcardBox>
      <VStack margin="auto">
        {/* <Text fontSize="xl" color="gray.600">
          Welcome {currentUser?.email}
        </Text> */}
        <Text fontSize="xl" color="blue.600">
          <ChakraLink
            color="blue.600"
            href={`/new-topic/${usernameFromUserObject(currentUser)}`}
          >
            Create New Flashcard or Topic
          </ChakraLink>
        </Text>
        <Text fontSize="xl" color="gray.600">
          Topics by {usernameFromUserObject(currentUser)}:{' '}
        </Text>
        <FlashcardTopicsCell username={usernameFromUserObject(currentUser)} />
      </VStack>
    </FlashcardBox>
  ) : (
    <Flashcard
      username={'HelloFlipAgain'}
      topic={'Welcome'}
      order={1}
      flashcard={defaultFlashcards[0]}
      flashcardListLength={defaultFlashcards.length}
    />
  )
}

export default HomePage
