import { Center, Text } from '@chakra-ui/layout'
import { Collapse, Fade, SlideFade } from '@chakra-ui/transition'

const FlashcardText = ({ text }) => (
  <Text
    marginY="auto"
    as="h3"
    padding={2}
    fontSize={{ base: '5xl', lg: '6xl' }}
    color="blue.600"
    textAlign="center"
    overflowWrap="anywhere"
  >
    {text}
  </Text>
)

const FlashcardContent = ({ front, back, isShowingFront }) => (
  <Center overflowY="auto" height="100%">
    {isShowingFront ? (
      <FlashcardText text={front} />
    ) : (
      <SlideFade in={!isShowingFront} offsetY="200px">
        <FlashcardText text={back} />
      </SlideFade>
    )}
  </Center>
)

{
  /* <SlideFade in={!isShowingFront}>{back}</SlideFade> */
}

{
  /* <SlideFade in={!isShowingFront} offsetY="50px">
          {back}
        </SlideFade> */
}

export default FlashcardContent
