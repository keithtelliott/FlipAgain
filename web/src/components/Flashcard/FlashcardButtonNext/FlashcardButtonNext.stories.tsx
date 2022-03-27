import FlashcardButtonNext from './FlashcardButtonNext'

export const generated = () => {
  return (
    <FlashcardButtonNext
      order={1}
      username="keith"
      topic="Pets"
      flashcardListLength={10}
    />
  )
}

export const disabled = () => {
  return (
    <FlashcardButtonNext
      order={10}
      username="keith"
      topic="Pets"
      flashcardListLength={10}
    />
  )
}

export default { title: 'Components/FlashcardButtonNext' }
