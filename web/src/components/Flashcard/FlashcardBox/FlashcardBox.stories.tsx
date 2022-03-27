import FlashcardBox from './FlashcardBox'

export const generated = () => {
  return (
    <FlashcardBox backgroundColor="yellow">
      <p>This box will hold the whole flashcard content and controls</p>
      <p>Cool</p>
      <p>
        I passed a backgroundColor prop to confirm that Chakra props move on
        through as they should
      </p>
    </FlashcardBox>
  )
}

export default { title: 'Components/FlashcardBox' }
