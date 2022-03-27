import { useAuth } from '@redwoodjs/auth'
// import { Link, routes } from '@redwoodjs/router'
// import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? (
    <>
      <p>build this...</p>
    </>
  ) : (
    <p>return the first welcome flashcard</p>
    // <Flashcard />
  )
}

export default HomePage
