import { render } from '@redwoodjs/testing'

import FlashcardBox from './FlashcardBox'

describe('FlashcardBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardBox />)
    }).not.toThrow()
  })
})
