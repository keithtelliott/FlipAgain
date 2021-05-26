import getTopicsByUsername from './getTopicsByUsername'
import defaultFlashcards from 'src/util/defaultFlashcards'

describe('getTopicsByUsername', () => {
  it('handles the happy path - it the expected topics', () => {
    const topics = getTopicsByUsername('local', defaultFlashcards)
    expect(topics[0]).toBe('Intro')
    expect(topics[1]).toBe('Addition Practice')
  })

  it('handles a username that does not exist - an empty array is returned', () => {
    const topics = getTopicsByUsername(
      'username_does_not_exist',
      defaultFlashcards
    )
    expect(topics.length).toBe(0)
  })

  it('handles an empty Flashcards array - an empty array is returned', () => {
    const topics = getTopicsByUsername('local', [])
    expect(topics.length).toBe(0)
  })
})
