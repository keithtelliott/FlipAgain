import { render } from '@redwoodjs/testing'

import Flashcard from './Flashcard'

describe('Flashcard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Flashcard />)
    }).not.toThrow()
  })
})
