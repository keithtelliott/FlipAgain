import { ButtonGroup } from '@chakra-ui/react'
import FlashcardButtonFlip from './FlashcardButtonFlip'

export const generated = () => {
  // const [isShowingFront, setIsShowingFront] = useState(true)

  return (
    <ButtonGroup variant="outline" colorScheme="blue" size="sm">
      <FlashcardButtonFlip
        onClick={() => 'hola'}
        // onClick={() => setIsShowingFront}
        // isShowingFront={isShowingFront}
        isShowingFront={true}
      />
    </ButtonGroup>
  )
}

export const flipToFront = () => {
  // const [isShowingFront, setIsShowingFront] = useState(true)

  return (
    <ButtonGroup variant="outline" colorScheme="blue" size="sm">
      <FlashcardButtonFlip
        onClick={() => 'hola'}
        // onClick={() => setIsShowingFront}
        // isShowingFront={isShowingFront}
        isShowingFront={false}
      />
    </ButtonGroup>
  )
}

export default { title: 'Components/FlashcardButtonFlip' }
