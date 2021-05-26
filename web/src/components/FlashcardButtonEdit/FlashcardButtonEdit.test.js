import { render } from '@redwoodjs/testing'

import FlashcardButtonEdit from './FlashcardButtonEdit'

describe('FlashcardButtonEdit', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardButtonEdit />)
    }).not.toThrow()
  })
})
