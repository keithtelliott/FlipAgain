import { render } from '@redwoodjs/testing'

import LocalPersistenceWarning from './LocalPersistenceWarning'

describe('LocalPersistenceWarning', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LocalPersistenceWarning />)
    }).not.toThrow()
  })
})
