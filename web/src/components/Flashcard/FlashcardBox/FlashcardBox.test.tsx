import { render } from '@redwoodjs/testing/web'

import FlashcardBox from './FlashcardBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FlashcardBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <FlashcardBox>
          <p>In a box!</p>
        </FlashcardBox>
      )
    }).not.toThrow()
  })
})
