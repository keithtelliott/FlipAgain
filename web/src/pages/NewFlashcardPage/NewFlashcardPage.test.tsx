import { render } from '@redwoodjs/testing'

import NewFlashcardPage from './NewFlashcardPage'

describe('NewFlashcardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewFlashcardPage />)
    }).not.toThrow()
  })
})
