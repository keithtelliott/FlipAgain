import { render } from '@redwoodjs/testing'

import FlashcardForm from './FlashcardForm'

describe('FlashcardForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardForm />)
    }).not.toThrow()
  })
})
