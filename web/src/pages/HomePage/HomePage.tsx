import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import usernameFromUserObject from 'src/util/usernameFromUserObject'
// import { Link, routes } from '@redwoodjs/router'
// import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const { isAuthenticated, currentUser } = useAuth()

  console.log('home page currentUser:  ', currentUser)

  if (isAuthenticated)
    navigate(
      routes.flashcardUser({ username: usernameFromUserObject(currentUser) })
    )

  return isAuthenticated ? (
    <>
      <p>You are logged in! build this...</p>
    </>
  ) : (
    <p>You are not logged in. return the first welcome flashcard</p>
    // <Flashcard />
  )
}

export default HomePage
