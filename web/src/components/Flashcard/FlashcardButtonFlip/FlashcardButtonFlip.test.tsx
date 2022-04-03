import { ChakraProvider } from '@chakra-ui/react'
import { render } from '@redwoodjs/testing/web'

import FlashcardButtonFlip from './FlashcardButtonFlip'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FlashcardButtonFlip', () => {
  it('renders successfully', () => {
    expect(() => {
      // GoDo, KTE, 3/13/2022:  Determine if I can use useState hook in Jest & Storybook
      // GoDo, KTE, 3/13/2022:  Ahh!  Prisma error is back.  See error message that follows.  Figure it out!
      //       api | Invalid `prisma.user.findUnique()` invocation:
      // api |
      // api |
      // api |   The table `main.User` does not exist in the current database.
      //      Answer:  remove the .prisma folder that is in api/node_modules
      render(
        <ChakraProvider>
          <FlashcardButtonFlip onClick={() => 'hola'} isShowingFront={true} />
        </ChakraProvider>
      ).not.toThrow()
    })
  })
})
