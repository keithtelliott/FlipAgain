import { IconButton } from '@chakra-ui/button'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import { Link as RedwoodLink, routes } from '@redwoodjs/router'

interface Props {
  orderNumber: number
  flashcardListLength: number
  username: string
  topic: string
}

const FlashcardButtonNext: React.FunctionComponent<Props> = ({
  orderNumber,
  flashcardListLength,
  username,
  topic,
  ...props
}) =>
  orderNumber < flashcardListLength ? (
    <Tooltip label="Next" background="blue.500">
      <ChakraLink
        as={RedwoodLink}
        to={`/flashcard/${username}/${encodeURIComponent(topic)}/${
          orderNumber + 1
        }`}
        // to={routes.flashcard({
        //   username: username,
        //   topic: encodeURIComponent(topic),
        //   orderNumber: orderNumber + 1,
        // })}
        {...props}
      >
        <IconButton aria-label="Next flashcard">
          <ChevronRightIcon />
        </IconButton>
      </ChakraLink>
    </Tooltip>
  ) : (
    <IconButton aria-label="Next flashcard" disabled={true}>
      <ChevronRightIcon />
    </IconButton>
  )

export default FlashcardButtonNext
