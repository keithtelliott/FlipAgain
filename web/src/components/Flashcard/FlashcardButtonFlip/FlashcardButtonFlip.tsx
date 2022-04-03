import { Button } from '@chakra-ui/button'
import { Tooltip } from '@chakra-ui/tooltip'
import { MouseEventHandler, SetStateAction } from 'react'

interface Props {
  isShowingFront: boolean
  onClick: MouseEventHandler //React.Dispatch<SetStateAction<boolean>>
  // onClick: React.Dispatch<SetStateAction<boolean>>
  // GoDo, KTE, 3/13/2022:  Figure out the function types!
}

const FlashcardButtonFlip = ({ onClick, isShowingFront, ...rest }: Props) => {
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
