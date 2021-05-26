import { Button } from '@chakra-ui/button'
import { Tooltip } from '@chakra-ui/tooltip'

const FlashcardButtonFlip = ({ onClick, isShowingFront, ...rest }) => {
  return (
    <Tooltip label="FlipAgain" background="blue.500">
      <Button
        variant={!isShowingFront ? 'outline' : 'solid'}
        aria-label="Flip flashcard over"
        onClick={onClick}
        {...rest}
      >
        Flip to {isShowingFront ? 'Back' : 'Front'}
      </Button>
    </Tooltip>
  )
}

export default FlashcardButtonFlip
