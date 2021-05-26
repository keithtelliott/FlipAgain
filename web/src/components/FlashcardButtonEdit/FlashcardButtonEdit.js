import { IconButton } from '@chakra-ui/button'
import { AddIcon, EditIcon } from '@chakra-ui/icons'
import { Link as ChakraLink } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import { Link as RedwoodLink, navigate, routes } from '@redwoodjs/router'

// import { GrEdit } from 'react-icons/gr'

const FlashcardButtonEdit = ({ isDisabled, orderNumber, username, topic }) =>
  !isDisabled ? (
    <Tooltip label="Edit" background="blue.500">
      <ChakraLink
        as={RedwoodLink}
        to={routes.editFlashcard({
          username: encodeURIComponent(username),
          topic: encodeURIComponent(topic),
          orderNumber: orderNumber,
        })}
      >
        <IconButton icon={<EditIcon />} />
      </ChakraLink>
    </Tooltip>
  ) : (
    <IconButton isDisabled={true} icon={<EditIcon />} />
  )

export default FlashcardButtonEdit
