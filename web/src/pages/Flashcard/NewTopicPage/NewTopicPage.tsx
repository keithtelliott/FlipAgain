import NewFlashcardCell from 'src/components/Flashcard/NewFlashcardCell'

type NewTopicPageProps = {
  username: string
}

const NewTopicPage = ({ username }: NewTopicPageProps) => {
  return (
    <NewFlashcardCell
      username={username}
      isRequestingNewTopic={true}
      topic={undefined}
    />
  )
}

export default NewTopicPage
