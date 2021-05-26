import NewFlashcard from 'src/components/NewFlashcard/NewFlashcard'

interface Props {
  username: string
  topic: string
  originatingOrderNumber: number
}

const NewFlashcardPage: React.FunctionComponent<Props> = ({
  username,
  topic,
  originatingOrderNumber,
}) => {
  return (
    <NewFlashcard
      username={username}
      topic={topic}
      originatingOrderNumber={originatingOrderNumber}
    />
  )
}

export default NewFlashcardPage
