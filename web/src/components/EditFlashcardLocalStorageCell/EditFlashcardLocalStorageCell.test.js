import { render } from '@redwoodjs/testing'

import EditFlashcardLocalStorageCell from './EditFlashcardLocalStorageCell'

describe('EditFlashcardLocalStorageCell', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditFlashcardLocalStorageCell />)
    }).not.toThrow()
  })
})
