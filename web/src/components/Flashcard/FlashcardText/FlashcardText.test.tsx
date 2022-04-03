import { render } from '@redwoodjs/testing/web'

import FlashcardText from './FlashcardText'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FlashcardText', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardText isAnimatedFlip={true} text="57 + 192" />)
    }).not.toThrow()
  })
})
