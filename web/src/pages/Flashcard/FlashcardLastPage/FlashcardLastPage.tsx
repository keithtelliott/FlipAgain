import FlashcardLastCell from 'src/components/Flashcard/FlashcardLastCell'

type FlashcardLastPageProps = {
  username: string
  topic: string
}

const FlashcardLastPage = ({ username, topic }: FlashcardLastPageProps) => {
  console.log('FlashcardLastPage.  Here is the topic: ', topic)

  return (
    <FlashcardLastCell username={username} topic={decodeURIComponent(topic)} />
  )
  // GoDo, KTE, 3/15/2022:  Consider encoding the URL parameters.  Should I slugify instead?
}

export default FlashcardLastPage
