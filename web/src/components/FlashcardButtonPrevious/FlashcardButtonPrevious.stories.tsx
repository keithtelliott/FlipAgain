import FlashcardButtonPrevious from './FlashcardButtonPrevious'

export const shouldAppear = () => {
  return (
    <FlashcardButtonPrevious
      orderNumber={2}
      username="keithtelliott"
      topic="Redwood Tips"
    />
  )
}

export const shouldNotAppear = () => {
  return (
    <FlashcardButtonPrevious
      orderNumber={1}
      username="keithtelliott"
      topic="Redwood Tips"
    />
  )
}
export default { title: 'Components/FlashcardButtonPrevious' }
