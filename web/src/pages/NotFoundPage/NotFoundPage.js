import { Center, Divider, Heading, Link, Text, VStack } from '@chakra-ui/layout'
import FlipAgainLayout from 'src/layouts/FlipAgainLayout/FlipAgainLayout'

export default () => (
  <FlipAgainLayout>
    <Center margin="auto">
      <VStack>
        <Text color="blue.600">Oops! 404 Page Not Found</Text>
        <Divider />
        <Text color="blue.600">
          <Link href="/">FlipAgain Home</Link>
        </Text>
      </VStack>
    </Center>
  </FlipAgainLayout>
)
