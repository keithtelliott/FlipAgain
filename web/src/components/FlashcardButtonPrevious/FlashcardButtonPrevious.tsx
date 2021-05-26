import { IconButton } from '@chakra-ui/button'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import { Link as RedwoodLink, routes } from '@redwoodjs/router'

interface Props {
  orderNumber: number
  username: string
  topic: string
}

const FlashcardButtonPrevious: React.FunctionComponent<Props> = ({
  orderNumber,
  username,
  topic,
  ...props
}) =>
  orderNumber > 1 ? (
    <Tooltip label="Previous" background="blue.500">
      <ChakraLink
        as={RedwoodLink}
        to={`/flashcard/${username}/${encodeURIComponent(topic)}/${
          orderNumber - 1
        }`}
        // to={routes.flashcard({
        //   username: username,
        //   topic: encodeURIComponent(topic),
        //   orderNumber: orderNumber - 1,
        // })}

        {...props}
      >
        <IconButton aria-label="Previous flashcard">
          <ChevronLeftIcon />
        </IconButton>
      </ChakraLink>
    </Tooltip>
  ) : (
    <IconButton aria-label="Previous flashcard" disabled={true}>
      <ChevronLeftIcon />
    </IconButton>
  )

export default FlashcardButtonPrevious
