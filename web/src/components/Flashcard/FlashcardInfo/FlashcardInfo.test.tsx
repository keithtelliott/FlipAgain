import { render } from '@redwoodjs/testing/web'

import FlashcardInfo from './FlashcardInfo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FlashcardInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardInfo topic="Pets" order={2} flashcardListLength={10} />)
    }).not.toThrow()
  })
})
