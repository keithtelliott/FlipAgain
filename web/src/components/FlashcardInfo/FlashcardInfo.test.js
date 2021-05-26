import { render } from '@redwoodjs/testing'

import FlashcardInfo from './FlashcardInfo'

describe('FlashcardInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardInfo />)
    }).not.toThrow()
  })
})
