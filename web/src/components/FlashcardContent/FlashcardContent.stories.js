import FlashcardContent from './FlashcardContent'

export const front = () => {
  return (
    <FlashcardContent
      front="here's the front"
      back="here's the back"
      isShowingFront={true}
    />
  )
}

export const back = () => {
  return (
    <FlashcardContent
      front="here's the front"
      back="here's the back"
      isShowingFront={false}
    />
  )
}
export default { title: 'Components/FlashcardContent' }
