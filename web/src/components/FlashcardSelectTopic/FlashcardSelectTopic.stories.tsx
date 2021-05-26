import FlashcardSelectTopic from './FlashcardSelectTopic'

export const generated = () => {
  return (
    <FlashcardSelectTopic
      topics={['Intro', 'Addition Practice', 'Redwood']}
      initialTopic="Intro"
      username="local"
    />
  )
}

export default { title: 'Components/FlashcardSelectTopic' }
