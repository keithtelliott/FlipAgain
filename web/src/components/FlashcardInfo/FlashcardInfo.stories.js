import FlashcardInfo from './FlashcardInfo'

export const generated = () => {
  return (
    <FlashcardInfo
      topic="My Flashcard Topic"
      orderNumber={1}
      flashcardListLength={15}
    />
  )
}

export default { title: 'Components/FlashcardInfo' }
