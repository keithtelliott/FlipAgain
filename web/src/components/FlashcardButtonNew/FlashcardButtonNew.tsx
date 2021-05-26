import { IconButton } from '@chakra-ui/button'
import { AddIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import { Link as RedwoodLink, routes } from '@redwoodjs/router'

interface FlashcardButtonNewProps {
  orderNumber: string
  username: string
  topic: string
}

const FlashcardButtonNew = ({
  orderNumber,
  username,
  topic,
}: FlashcardButtonNewProps) => {
  return (
    <Tooltip label="New" background="blue.500">
      <ChakraLink
        as={RedwoodLink}
        // to={routes.newFlashcard({
        //   username: encodeURIComponent(username),
        //   topic: encodeURIComponent(topic),
        //   orderNumber: orderNumber,
        // })}
        to={`/flashcard/${encodeURIComponent(username)}/${encodeURIComponent(
          topic
        )}/${orderNumber}/new`}
      >
        <IconButton aria-label="Create new flashcard" icon={<AddIcon />} />
      </ChakraLink>
    </Tooltip>
  )
}

export default FlashcardButtonNew
