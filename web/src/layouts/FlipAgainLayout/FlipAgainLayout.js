import { IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import {
  Box,
  HStack,
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
import { Link as RedwoodLink, routes } from '@redwoodjs/router'

const FlipAgainLayout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box height="100vh">
        <Box as="nav">
          <HStack spacing={1}>
            <Text
              color="blue.600"
              fontWeight="semibold"
              fontSize="large"
              paddingLeft={3}
              paddingBottom={1}
              paddingRight={0}
            >
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
        </Box>
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
