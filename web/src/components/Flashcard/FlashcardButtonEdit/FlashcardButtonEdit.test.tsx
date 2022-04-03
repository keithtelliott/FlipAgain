import { ChakraProvider } from '@chakra-ui/react'
import { render } from '@redwoodjs/testing/web'

import FlashcardButtonEdit from './FlashcardButtonEdit'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FlashcardButtonEdit', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ChakraProvider>
          <FlashcardButtonEdit
            username="keith"
            topic="Pets"
            order={1}
            isDisabled={false}
          />
        </ChakraProvider>
      )
    }).not.toThrow()
  })
})
