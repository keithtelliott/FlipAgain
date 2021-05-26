import { render } from '@redwoodjs/testing'

import FlashcardApp from './FlashcardApp'

describe('FlashcardApp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardApp />)
    }).not.toThrow()
  })
})
