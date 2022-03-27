import EditFlashcardCell from 'src/components/Flashcard/EditFlashcardCell'

type FlashcardPageProps = {
  username: string
  topic: string
  order: number
}

const EditFlashcardPage = ({ username, topic, order }: FlashcardPageProps) => {
  return (
    <EditFlashcardCell
      username={username}
      topic={decodeURIComponent(topic)}
      order={order}
    />
  )
}

export default EditFlashcardPage
