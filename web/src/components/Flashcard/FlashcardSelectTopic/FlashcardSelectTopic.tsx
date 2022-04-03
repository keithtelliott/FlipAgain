import { Button, IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Divider, Link as ChakraLink, Text } from '@chakra-ui/layout'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal'
import { Tooltip } from '@chakra-ui/tooltip'
import { useAuth } from '@redwoodjs/auth'
import FlashcardTopicsCell from 'src/components/Flashcard/FlashcardTopicsCell'
import usernameFromUserObject from 'src/util/usernameFromUserObject'

interface Props {
  username: string
  // defaultTopic: string
}

const FlashcardSelectTopic: React.FunctionComponent<Props> = ({ username }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isAuthenticated, currentUser } = useAuth()
  const isAuthorizedToEditAddDelete =
    isAuthenticated && username === usernameFromUserObject(currentUser)

  return (
    <>
      <Tooltip label="Topics" background="blue.500">
        <IconButton
          aria-label="Create or Select Another Topic"
          icon={<HamburgerIcon />}
          onClick={onOpen}
        />
      </Tooltip>

      <Modal size="xs" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="blue.600">Topics by {username}</ModalHeader>
          <ModalCloseButton color="blue.600" />
          <ModalBody>
            {isAuthorizedToEditAddDelete && (
              <>
                <Text color="blue.600">
                  <ChakraLink color="blue.600" href={`/new-topic/${username}`}>
                    Create New Topic
                  </ChakraLink>
                </Text>
                <Box p={1} />
              </>
            )}
            <Divider />
            <Box p={1} />
            <FlashcardTopicsCell username={username} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default FlashcardSelectTopic
