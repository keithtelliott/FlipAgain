import { Text } from '@chakra-ui/layout'

interface Props {
  topic: string
  order: number
  flashcardListLength: number
}

const FlashcardInfo = ({
  topic,
  order,
  flashcardListLength,
  ...props
}: Props) => {
  return (
    <Text color="blue.600" fontSize="sm" {...props}>
      {topic}, {order} / {flashcardListLength}
    </Text>
  )
}

export default FlashcardInfo
