import { Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface Props {
  text: string
  isAnimatedFlip: boolean
}

const flipVariant = {
  hidden: { y: 200 },
  visible: { y: 0 },
}

const FlashcardText: React.FunctionComponent<Props> = ({
  text,
  isAnimatedFlip,
}) => (
  <Text
    margin="auto"
    as="h3"
    padding={2}
    fontSize={{ base: '5xl', lg: '6xl' }}
    color="blue.600"
    textAlign="center"
    overflowWrap="anywhere"
    wordBreak="break-word"
    whiteSpace="break-spaces"
  >
    {isAnimatedFlip ? (
      <motion.div variants={flipVariant} initial="hidden" animate="visible">
        {text}
      </motion.div>
    ) : (
      text
    )}
  </Text>
)

export default FlashcardText
