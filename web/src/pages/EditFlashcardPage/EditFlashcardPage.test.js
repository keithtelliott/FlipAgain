import { render } from '@redwoodjs/testing'

import EditFlashcardPage from './EditFlashcardPage'

describe('EditFlashcardPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditFlashcardPage />)
    }).not.toThrow()
  })
})
