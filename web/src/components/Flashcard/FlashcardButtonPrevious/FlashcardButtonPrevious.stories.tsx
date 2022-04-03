import FlashcardButtonPrevious from './FlashcardButtonPrevious'

export const generated = () => {
  return (
    <FlashcardButtonPrevious
      username="keith"
      topic="Pets"
      order={2}
      flashcardListLength={10}
    />
  )
}

export default { title: 'Components/FlashcardButtonPrevious' }
