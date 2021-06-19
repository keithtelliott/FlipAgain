import { render } from '@redwoodjs/testing'

import FlashcardText from './FlashcardText'

describe('FlashcardText', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardText />)
    }).not.toThrow()
  })
})
