import { IconButton } from '@chakra-ui/button'
import { EditIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import { Link as RedwoodLink, routes } from '@redwoodjs/router'

const FlashcardButtonEdit = ({ isDisabled, order, username, topic }) =>
  !isDisabled ? (
    <Tooltip label="Edit" background="blue.500">
      <ChakraLink
        as={RedwoodLink}
        to={routes.editFlashcard({
          username: encodeURIComponent(username),
          topic: encodeURIComponent(topic),
          order,
        })}
      >
        <IconButton aria-label="Edit Flashcard Button" icon={<EditIcon />} />
      </ChakraLink>
    </Tooltip>
  ) : (
    <IconButton
      aria-label="Disabled Edit Button"
      isDisabled={true}
      icon={<EditIcon />}
    />
  )

export default FlashcardButtonEdit
