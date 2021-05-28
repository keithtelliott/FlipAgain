import { Center, Text } from '@chakra-ui/layout'
import { Collapse, Fade, SlideFade } from '@chakra-ui/transition'

const FlashcardContent = ({ front, back, isShowingFront, ...rest }) => (
  <Center
    overflow="auto"
    // overflowX="auto"
    height="100%"
    maxWidth="100%"
    // overflowWrap="anywhere"
    {...rest}
  >
    <Text
      as="h3"
      padding={2}
      fontSize={{ base: '5xl', lg: '6xl' }}
      color="blue.600"
      textAlign="center"
      {...rest}
    >
      {isShowingFront ? (
        front
      ) : (
        <SlideFade in={!isShowingFront} offsetY="200px">
          {back}
        </SlideFade>
      )}
    </Text>
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
