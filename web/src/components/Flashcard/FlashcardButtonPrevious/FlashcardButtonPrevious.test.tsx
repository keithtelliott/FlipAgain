import { ChakraProvider } from '@chakra-ui/react'
import { render } from '@redwoodjs/testing/web'

import FlashcardButtonPrevious from './FlashcardButtonPrevious'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FlashcardButtonPrevious', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ChakraProvider>
          <FlashcardButtonPrevious
            username="keith"
            topic="Pets"
            order={2}
            flashcardListLength={10}
          />
        </ChakraProvider>
      )
    }).not.toThrow()
  })
})
