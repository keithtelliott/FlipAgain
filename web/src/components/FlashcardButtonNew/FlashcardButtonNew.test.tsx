import { render } from '@redwoodjs/testing'

import FlashcardButtonNew from './FlashcardButtonNew'

describe('FlashcardButtonNew', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardButtonNew />)
    }).not.toThrow()
  })
})
