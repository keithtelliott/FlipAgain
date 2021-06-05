import { Center, Text } from '@chakra-ui/layout'
import { motion } from 'framer-motion'

const FlashcardText = ({ text, isAnimated }) => (
  <Text
    marginY="auto"
    as="h3"
    padding={2}
    fontSize={{ base: '5xl', lg: '6xl' }}
    color="blue.600"
    textAlign="center"
    overflowWrap="anywhere"
    wordBreak="break-word"
    whiteSpace="break-spaces"
  >
    {isAnimated ? (
      <motion.div initial={{ y: 200 }} animate={{ y: 0 }}>
        {text}
      </motion.div>
    ) : (
      text
    )}
  </Text>
)

const FlashcardContent = ({ front, back, isShowingFront }) => (
  <Center overflowY="auto" height="100%">
    {isShowingFront ? (
      <FlashcardText text={front} isAnimated={!isShowingFront} />
    ) : (
      <FlashcardText text={back} isAnimated={!isShowingFront} />
    )}
  </Center>
)

export default FlashcardContent
