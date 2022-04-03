import { render } from '@redwoodjs/testing/web'

import Flashcard from './Flashcard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Flashcard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Flashcard />)
    }).not.toThrow()
  })
})
