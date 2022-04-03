import { render } from '@redwoodjs/testing/web'

import FlashcardSelectTopic from './FlashcardSelectTopic'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FlashcardSelectTopic', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardSelectTopic />)
    }).not.toThrow()
  })
})
