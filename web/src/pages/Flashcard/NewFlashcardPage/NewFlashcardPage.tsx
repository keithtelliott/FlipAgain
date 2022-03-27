import NewFlashcardCell from 'src/components/Flashcard/NewFlashcardCell'

type NewFlashcardPageProps = {
  username: string
  topic: string
}

const NewFlashcardPage = ({ username, topic }: NewFlashcardPageProps) => {
  console.log('topic in NewFlashcardPage: ', topic)

  return (
    <NewFlashcardCell username={username} topic={decodeURIComponent(topic)} />
  )
}

export default NewFlashcardPage
