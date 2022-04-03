import { useAuth } from '@redwoodjs/auth'
import usernameFromUserObject from 'src/util/usernameFromUserObject'
import Flashcard from 'src/components/Flashcard/Flashcard'
import FlashcardBox from 'src/components/Flashcard/FlashcardBox/FlashcardBox'
import FlashcardTopicsCell from 'src/components/Flashcard/FlashcardTopicsCell'
import { Text, VStack, Link as ChakraLink } from '@chakra-ui/react'

const WelcomePage = () => {
  const { isAuthenticated, currentUser, loading } = useAuth()

  // if (loading) {
  //   console.log('Welcome page, in if loading:  loading user...')

  //   return null
  // }

  // console.log('WelcomePage, here is isAuthenticated:  ', isAuthenticated)

  return (
    <FlashcardBox>
      <VStack margin="auto">
        {/* <Text fontSize="xl" color="gray.600">
          Welcome {currentUser?.email}
        </Text> */}
        {loading ? (
          <p>{''}</p>
        ) : isAuthenticated ? (
          <>
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
            <FlashcardTopicsCell
              username={usernameFromUserObject(currentUser)}
            />{' '}
          </>
        ) : (
          <Text color="gray.600">
            Hmmm, we were planning to welcome you with a warm hug, but there's a
            snag in the system. Try refreshing the page or logging in again.
          </Text>
        )}
      </VStack>
    </FlashcardBox>
  )
  // ) : (

  // <Flashcard
  //   username={'helloflipagain'}
  //   topic={'Welcome'}
  //   order={1}
  //   flashcard={defaultFlashcards[0]}
  //   flashcardListLength={defaultFlashcards.length}
  // />
  // )
}

export default WelcomePage
