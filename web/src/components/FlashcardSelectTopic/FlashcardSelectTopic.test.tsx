import { render } from '@redwoodjs/testing'

import FlashcardSelectTopic from './FlashcardSelectTopic'

describe('FlashcardSelectTopic', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardSelectTopic />)
    }).not.toThrow()
  })
})
