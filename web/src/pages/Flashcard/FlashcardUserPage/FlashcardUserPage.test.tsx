import { render } from '@redwoodjs/testing/web'

import FlashcardUserPage from './FlashcardUserPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FlashcardUserPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardUserPage />)
    }).not.toThrow()
  })
})
