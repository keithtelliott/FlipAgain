import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { HamburgerIcon, MinusIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
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

type FlipAgainLayoutProps = {
  children?: React.ReactNode
}

const FlipAgainLayout = ({ children }: FlipAgainLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { logIn, client, logOut, isAuthenticated } = useAuth()

  async function signInWithGoogle() {
    const { user, session, error } = await logIn({
      provider: 'google',
    })
    console.log('signInWithGoogle, here is the user:  ', user)
    console.log('signInWithGoogle, here is the session:  ', session)
    console.log('signInWithGoogle, here is the error:  ', error)
  }

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
            {isAuthenticated ? (
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
                </Button>
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
