import { render } from '@redwoodjs/testing'

import FlashcardButtonPrevious from './FlashcardButtonPrevious'

describe('FlashcardButtonPrevious', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <FlashcardButtonPrevious
          orderNumber={2}
          username="keithtelliott"
          topic="Redwood Tips"
        />
      )
    }).not.toThrow()
  })
})
