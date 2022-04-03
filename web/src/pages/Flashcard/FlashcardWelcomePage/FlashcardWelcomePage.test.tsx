import { render } from '@redwoodjs/testing/web'

import FlashcardWelcomePage from './FlashcardWelcomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FlashcardWelcomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardWelcomePage />)
    }).not.toThrow()
  })
})
