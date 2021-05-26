import { render } from '@redwoodjs/testing'

import FlashcardContent from './FlashcardContent'

describe('FlashcardContent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardContent />)
    }).not.toThrow()
  })
})
