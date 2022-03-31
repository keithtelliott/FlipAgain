import { Button, Center, Text, VStack } from '@chakra-ui/react'
import { useAuth } from '@redwoodjs/auth'
import { FcGoogle } from 'react-icons/fc'
import FlashcardBox from 'src/components/Flashcard/FlashcardBox/FlashcardBox'

const SigninPage = () => {
  const { logIn } = useAuth()

  async function signInWithGoogle() {
    await logIn({
      provider: 'google',
    })
  }

  return (
    <>
      <FlashcardBox>
        <VStack margin="auto">
          <Button size="lg" onClick={signInWithGoogle} leftIcon={<FcGoogle />}>
            Sign in with Google
          </Button>
          <Text p={10} color="blue.600">
            Sign in via Google to create and edit your own personal flashcards.
            You're on your way to efficient learning!
          </Text>
        </VStack>
      </FlashcardBox>
    </>
  )
}

export default SigninPage
