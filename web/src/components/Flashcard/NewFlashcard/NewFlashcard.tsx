import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import FlashcardForm from 'src/components/Flashcard/FlashcardForm'

const CREATE_FLASHCARD_MUTATION = gql`
  mutation CreateFlashcardMutation($input: CreateFlashcardInput!) {
    createFlashcard(input: $input) {
      id
    }
  }
`

const NewFlashcard = () => {
  const [createFlashcard, { loading, error }] = useMutation(CREATE_FLASHCARD_MUTATION, {
    onCompleted: () => {
      toast.success('Flashcard created')
      navigate(routes.flashcards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createFlashcard({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Flashcard</h2>
      </header>
      <div className="rw-segment-main">
        <FlashcardForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFlashcard
