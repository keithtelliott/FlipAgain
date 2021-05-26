import FlashcardApp from 'src/components/FlashcardApp/FlashcardApp'

const FlashcardPage = ({ username, topic, orderNumber }) => {
  return (
    <>
      <FlashcardApp
        username={username}
        topic={topic}
        orderNumber={orderNumber}
      />
    </>
  )
}

export default FlashcardPage
