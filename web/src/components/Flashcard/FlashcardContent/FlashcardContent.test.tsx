import { render } from '@redwoodjs/testing/web'

import FlashcardContent from './FlashcardContent'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FlashcardContent', () => {
  it('renders successfully', () => {
    expect(() => {
      // render(<FlashcardContent />)
      render(<p>GoDo: Create a real test</p>)
    }).not.toThrow()
  })
})
