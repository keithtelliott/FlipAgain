import { ChakraProvider } from '@chakra-ui/react'
import { render } from '@redwoodjs/testing/web'

import FlashcardButtonNext from './FlashcardButtonNext'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FlashcardButtonNext', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ChakraProvider>
          <FlashcardButtonNext
            flashcardListLength={10}
            order={1}
            topic={'Pets'}
            username={'keith'}
          />
        </ChakraProvider>
      )
    }).not.toThrow()
  })
})
