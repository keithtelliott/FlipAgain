import { Button, IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Divider, Link, Text } from '@chakra-ui/layout'
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal'
import { Tooltip } from '@chakra-ui/tooltip'
import { navigate } from '@redwoodjs/router'

interface Props {
  username: string
  defaultTopic: string
  topics: string[]
}

// const DEFAULT_ORDER_NUMBER = 1
// const SELECT_TOPIC = 'Select Topic'

const FlashcardSelectTopic: React.FunctionComponent<Props> = ({
  username,
  defaultTopic,
  topics,
}) => {
  // const onChange = (event) => {
  //   console.log('called onChange.  Here is the event:  ', event)
  //   if (event.target.value === SELECT_TOPIC || event.target.value === '') return // do nothing when placeholder is selected

  //   navigate(
  //     `/flashcard/${encodeURIComponent(username)}/${encodeURIComponent(
  //       event.target.value
  //     )}/${DEFAULT_ORDER_NUMBER}`
  //   )
  // }

  const { isOpen, onOpen, onClose } = useDisclosure()

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
          <ModalHeader color="blue.600">Create or Select a Topic</ModalHeader>
          <ModalCloseButton color="blue.600" />
          <ModalBody>
            <Link color="blue.600" href={`/new-topic/${username}`}>
              Create New Topic
            </Link>
            <Box p={1} />
            <Divider />
            <Box p={1} />
            {topics?.map((topic, index) => (
              <Text color="blue.600" key={topic + index}>
                <Link href={`/flashcard/${username}/${topic}`}>{topic}</Link>
              </Text>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>

    // <Select
    //   placeholder={SELECT_TOPIC}
    //   defaultValue={defaultTopic}
    //   onChange={(event) => onChange(event)}
    //   color="blue.600"
    // >
    //   {/* <option key={SELECT_TOPIC} value={SELECT_TOPIC}>
    //     {SELECT_TOPIC}
    //   </option> */}
    //   {topics.map((topic, index) => (
    //     <option key={topic + index} value={topic}>
    //       {topic}
    //     </option>
    //   ))}
    // </Select>
  )
}

export default FlashcardSelectTopic
