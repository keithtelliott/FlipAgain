import { render } from '@redwoodjs/testing/web'

import NewTopicPage from './NewTopicPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewTopicPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewTopicPage />)
    }).not.toThrow()
  })
})
