import { render } from '@redwoodjs/testing'

import NewTopicPage from './NewTopicPage'

describe('NewTopicPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewTopicPage />)
    }).not.toThrow()
  })
})
