// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import FlipAgainLayout from './layouts/FlipAgainLayout/FlipAgainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={FlipAgainLayout}>
        <Route path="/" page={FlashcardPage} name="home" />
        <Route path="/flashcard/{username}/{topic}/{orderNumber:Int}" page={FlashcardPage} name="flashcard" />
        <Route path="/flashcard/{username}/{topic}/{orderNumber:Int}/edit" page={EditFlashcardPage} name="editFlashcard" />
        <Route path="/flashcard/{username}/{topic}/{originatingOrderNumber:Int}/new" page={NewFlashcardPage} name="newFlashcard" />
        <Route path="/flashcard/{username}/{topic}/" page={FlashcardPage} name="flashcard" />
        <Route path="/flashcard/{username}/{topic}" page={FlashcardPage} name="flashcard" />
        <Route path="/flashcard/{username}/{topic}/last" page={FlashcardLastPage} name="flashcardLast" />
        <Route path="/new-topic/{username}" page={NewTopicPage} name="newTopic" />
        <Route path="/new-topic" page={NewTopicPage} name="newTopic" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
