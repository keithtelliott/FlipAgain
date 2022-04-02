// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import FlipAgainLayout from './layouts/FlipAgainLayout/FlipAgainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={FlipAgainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
        <Route path="/signin" page={SigninPage} name="signin" />
        <Route path="/flashcard/HelloFlipAgain/Welcome/{order:Int}" page={FlashcardFlashcardWelcomePage} name="flashcardWelcome" />
        <Route path="/flashcard/{username}" page={FlashcardFlashcardUserPage} name="flashcardUser" />
        <Route path="/flashcard/{username}/{topic}" page={FlashcardFlashcardPage} name="flashcard" />
        <Route path="/flashcard/{username}/{topic}/{order:Int}" page={FlashcardFlashcardPage} name="flashcard" />
        <Route path="/flashcard/{username}/{topic}/{order:Int}/edit" page={FlashcardEditFlashcardPage} name="editFlashcard" />
        <Route path="/flashcard/{username}/{topic}/new" page={FlashcardNewFlashcardPage} name="newFlashcard" />
        <Route path="/flashcard/{username}/{topic}/last" page={FlashcardFlashcardLastPage} name="flashcardLast" />
        <Route path="/flashcards" page={FlashcardFlashcardsPage} name="flashcards" />
        <Route path="/new-topic/{username}" page={FlashcardNewTopicPage} name="newTopic" />
      </Set>
    </Router>
  )
}

export default Routes
