import { VStack } from '@chakra-ui/layout'

const FlashcardBox = ({ children, ...props }) => (
  <VStack
    borderRadius="2xl"
    borderColor="blue.600"
    height="100%"
    width="100%"
    padding={1}
    shadow="2xl"
    borderWidth="1px"
    overflowX="hidden"
    {...props}
  >
    {children}
  </VStack>
)

export default FlashcardBox
