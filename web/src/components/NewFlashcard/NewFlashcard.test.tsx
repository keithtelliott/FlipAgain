import { render } from '@redwoodjs/testing'

import NewFlashcard from './NewFlashcard'

describe('NewFlashcard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewFlashcard />)
    }).not.toThrow()
  })
})
