import { render } from '@redwoodjs/testing'

import FlashcardButtonNext from './FlashcardButtonNext'

describe('FlashcardButtonNext', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <FlashcardButtonNext
          orderNumber={1}
          flashcardListLength={15}
          username="keithtelliott"
          topic="Redwood Tips"
        />
      )
    }).not.toThrow()
  })
})
