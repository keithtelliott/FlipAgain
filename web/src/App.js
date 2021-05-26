import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'

import { ChakraProvider } from '@chakra-ui/react'

const App = () => (
  <ChakraProvider>
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodApolloProvider>
        <Routes />
      </RedwoodApolloProvider>
    </FatalErrorBoundary>
  </ChakraProvider>
)

export default App
