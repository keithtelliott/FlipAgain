import type { FindFlashcards } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Flashcards from 'src/components/Flashcard/Flashcards'

export const QUERY = gql`
  query FindFlashcards {
    flashcards {
      id
      topic
      front
      back
      orderNum
      userId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No flashcards yet. '}
      <Link
        to={routes.newFlashcard()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ flashcards }: CellSuccessProps<FindFlashcards>) => {
  return <Flashcards flashcards={flashcards} />
}
