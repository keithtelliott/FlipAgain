import { render } from '@redwoodjs/testing'

import FlashcardButtonFlip from './FlashcardButtonFlip'

describe('FlashcardButtonFlip', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardButtonFlip />)
    }).not.toThrow()
  })
})
