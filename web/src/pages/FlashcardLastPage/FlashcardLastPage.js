import FlashcardApp from 'src/components/FlashcardApp/FlashcardApp'

const FlashcardLastPage = ({ username, topic }) => {
  return (
    <>
      <FlashcardApp username={username} topic={topic} goOrderLast={true} />
    </>
  )
}

export default FlashcardLastPage
