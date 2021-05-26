import FlashcardBox from './FlashcardBox'

export const boxForFlashardContents = () => {
  return (
    <FlashcardBox backgroundColor="yellow">
      <p>This box will hold the whole flashcard content and controls</p>
      <p>Cool</p>
    </FlashcardBox>
  )
}

export default { title: 'Components/FlashcardBox' }
