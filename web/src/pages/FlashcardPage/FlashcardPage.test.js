import { render } from '@redwoodjs/testing'

import FlashcardPage from './FlashcardPage'

describe('FlashcardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardPage />)
    }).not.toThrow()
  })
})
