import { render } from '@redwoodjs/testing/web'

import FlipAgainLayout from './FlipAgainLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FlipAgainLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlipAgainLayout />)
    }).not.toThrow()
  })
})
