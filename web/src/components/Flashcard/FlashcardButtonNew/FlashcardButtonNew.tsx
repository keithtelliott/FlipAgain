import { IconButton } from '@chakra-ui/button'
import { AddIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import { Link as RedwoodLink, routes } from '@redwoodjs/router'

interface FlashcardButtonNewProps {
  username: string
  topic: string
}

const FlashcardButtonNew = ({ username, topic }: FlashcardButtonNewProps) => {
  return (
    <Tooltip label="Add" background="blue.500">
      <ChakraLink
        as={RedwoodLink}
        to={routes.newFlashcard({
          username: encodeURIComponent(username),
          topic: encodeURIComponent(topic),
        })}
      >
        <IconButton aria-label="Create new flashcard" icon={<AddIcon />} />
      </ChakraLink>
    </Tooltip>
  )
}

export default FlashcardButtonNew
