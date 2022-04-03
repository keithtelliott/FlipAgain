import FlashcardText from './FlashcardText'

export const generated = () => {
  return <FlashcardText isAnimatedFlip={false} text="57 + 192" />
}

export const animated = () => {
  return <FlashcardText isAnimatedFlip={true} text="57 + 192" />
}

export default { title: 'Components/FlashcardText' }
