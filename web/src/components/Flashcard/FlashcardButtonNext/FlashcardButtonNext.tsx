import { IconButton } from '@chakra-ui/button'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import { Link as RedwoodLink, routes } from '@redwoodjs/router'

// GoDo, KTE, 3/13/2022.  Work through these issues...
// 1.  Jest breaks b/c of a type error.  Get it working.
// 2.  Storybook is not working.  See 2/23/2022 maker hour notes.  Need to install
//     Storybook add-on and update config
//     Command to setup chakra-ui is yarn rw setup ui chakra-ui --install=false
interface Props {
  order: number
  flashcardListLength: number
  username: string
  topic: string
}

const FlashcardButtonNext: React.FunctionComponent<Props> = ({
  order,
  flashcardListLength,
  username,
  topic,
  ...props
}) =>
  order < flashcardListLength ? (
    <Tooltip label="Next" background="blue.500">
      <ChakraLink
        as={RedwoodLink}
        // to={`www.google.com`}
        to={routes.flashcard({
          username: username,
          topic: encodeURIComponent(topic),
          order: order + 1,
        })}
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
