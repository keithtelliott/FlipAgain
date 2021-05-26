import FlashcardButtonFlip from './FlashcardButtonFlip'

export const flipToBack = () => {
  return (
    <FlashcardButtonFlip
      onClick={() => console.log('clicked it!')}
      isShowingFront={true}
    />
  )
}

export const flipToFront = () => {
  return (
    <FlashcardButtonFlip
      onClick={() => console.log('clicked it!')}
      isShowingFront={false}
    />
  )
}

export default { title: 'Components/FlashcardButtonFlip' }
