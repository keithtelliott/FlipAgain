import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type FlashcardLayoutProps = {
  children: React.ReactNode
}

const FlashcardsLayout = ({ children }: FlashcardLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.flashcards()}
            className="rw-link"
          >
            Flashcards
          </Link>
        </h1>
        <Link
          to={routes.newFlashcard()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Flashcard
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default FlashcardsLayout
