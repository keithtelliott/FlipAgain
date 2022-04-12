import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { HamburgerIcon, MinusIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { IconButton } from '@chakra-ui/react'
import {
  Box,
  Flex,
  HStack,
  Spacer,
  Link as ChakraLink,
  Link,
  Text,
  VStack,
} from '@chakra-ui/layout'
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/modal'
import { useAuth } from '@redwoodjs/auth'
import { Link as RedwoodLink, navigate, routes } from '@redwoodjs/router'
import { FcGoogle } from 'react-icons/fc'
import { FaRegUser } from 'react-icons/fa'

type FlipAgainLayoutProps = {
  children?: React.ReactNode
}

const FlipAgainLayout = ({ children }: FlipAgainLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { logIn, client, logOut, isAuthenticated, loading } = useAuth()

  async function signInWithGoogle() {
    const { user, session, error } = await logIn({
      provider: 'google',
      redirectTo:
        window.location.protocol + '//' + window.location.host + '/welcome',
    })
  }
  // GoDo, KTE, 4/1/2022:  Bug.  Click login, I can see the redir happen, but
  // the auth does not take effect.  Click a couple more times and then it
  // takes effect and I'm redirected to the user page as expected.  Maybe create
  // handleLogIn that waits signInWithGoogle...

  async function handleLogOut() {
    await logOut()
    navigate(routes.home())
  }

  return (
    <>
      <Box height={{ base: '87vh', lg: '100vh' }}>
        <Flex as="nav" paddingX={3} paddingY={1}>
          <HStack spacing={1}>
            <Text color="blue.600" fontWeight="semibold" fontSize="large">
              <Link href="/">FlipAgain</Link>
            </Text>
            <Image src="/FlipAgain.png" alt="FlipAgain" boxSize="1.5em" />
            {/* <IconButton
              size="lg"
              variant="outline"
              borderColor="white"
              colorScheme="blue"
              aria-label="More info menu"
              icon={<HamburgerIcon onClick={onOpen} w={5} h={5} />}
            /> */}
          </HStack>
          <Spacer />
          <HStack spacing={1}>
            {loading ? (
              <IconButton
                variant="outline"
                colorScheme="blue"
                size="sm"
                isDisabled={true}
                aria-label="Loading User Authentication Info"
                icon={<FaRegUser />}
              />
            ) : isAuthenticated ? (
              <Button
                variant="outline"
                colorScheme="blue"
                size="sm"
                aria-label="Log Out"
                onClick={handleLogOut}
              >
                Log Out
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  colorScheme="blue"
                  size="sm"
                  onClick={signInWithGoogle}
                  leftIcon={<FcGoogle />}
                >
                  Sign in with Google
                </Button>
                {/* <Button
                  variant="outline"
                  colorScheme="blue"
                  size="sm"
                  aria-label="Sign in"
                  onClick={signInWithGoogle}
                >
                  Sign Up
                </Button>
                <Button
                  variant="outline"
                  colorScheme="blue"
                  size="sm"
                  aria-label="Sign in"
                  onClick={signInWithGoogle}
                >
                  Sign In
                </Button> */}
              </>
            )}
          </HStack>
          <Drawer placement="right" isOpen={isOpen} onClose={onClose} size="xs">
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>FlipAgain</DrawerHeader>
                <DrawerBody>
                  <ChakraLink
                    onClick={onClose}
                    // as={RedwoodLink}
                    // to="/flashcard/local/Intro/3"
                    href="/flashcard/local/Intro/3"
                  >
                    Home
                  </ChakraLink>
                  <Text onClick={onClose}>Home</Text>
                  <Text>About</Text>
                  <Text>Roadmap</Text>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Flex>
        <VStack
          height={{ base: '91%', sm: '85%', lg: '90%' }}
          marginX={4}
          as="main"
          overflowWrap="anywhere"
        >
          {children}
        </VStack>
      </Box>
    </>
  )
}

export default FlipAgainLayout
