import { render, screen } from '@redwoodjs/testing'

import FlashcardLastPage from './FlashcardLastPage'

describe('FlashcardLastPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlashcardLastPage username="local" topic="Intro" />)
    }).not.toThrow()
  })
  // it('returns the last flashcard in the stack', () => {
  //   expect(screen.)
  // })
})
