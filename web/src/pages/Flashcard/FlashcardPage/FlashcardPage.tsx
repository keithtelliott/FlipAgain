import FlashcardCell from 'src/components/Flashcard/FlashcardCell'

type FlashcardPageProps = {
  username: string
  topic: string
  order: number
}

const FlashcardPage = ({ username, topic, order = 1 }: FlashcardPageProps) => {
  console.log('fcpage, here is order:  ', order)

  return (
    <FlashcardCell
      username={username}
      topic={decodeURIComponent(topic)}
      order={order}
    />
  )
}

export default FlashcardPage
