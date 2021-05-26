import { render } from '@redwoodjs/testing'

import FlipAgainLayout from './FlipAgainLayout'

describe('FlipAgainLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlipAgainLayout />)
    }).not.toThrow()
  })
})
