import { ChakraProvider } from '@chakra-ui/react'
import { render } from '@redwoodjs/testing/web'

import FlashcardButtonNew from './FlashcardButtonNew'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FlashcardButtonNew', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ChakraProvider>
          <FlashcardButtonNew topic="Spanish" username="keith" />)
        </ChakraProvider>
      )
    }).not.toThrow()
  })
})
