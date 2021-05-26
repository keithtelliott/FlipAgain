import { Text } from '@chakra-ui/layout'

const FlashcardInfo = ({
  topic,
  orderNumber,
  flashcardListLength,
  ...props
}) => {
  return (
    <Text color="blue.600" fontSize="sm" {...props}>
      {topic}, {orderNumber} / {flashcardListLength}
    </Text>
  )
}

export default FlashcardInfo
