import FlashcardButtonNext from './FlashcardButtonNext'

export const shouldAppear = () => {
  return (
    <FlashcardButtonNext
      orderNumber={1}
      flashcardListLength={15}
      username="keithtelliott"
      topic="Redwood Tips"
    />
  )
}

export const shouldNotAppear = () => {
  return (
    <FlashcardButtonNext
      orderNumber={15}
      flashcardListLength={15}
      username="keithtelliott"
      topic="Redwood Tips"
    />
  )
}

export default { title: 'Components/FlashcardButtonNext' }
