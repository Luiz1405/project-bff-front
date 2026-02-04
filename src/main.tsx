import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './router'
import { GlobalStyles } from './components/GlobalStyles/index.tsx'
import { InMemoryCache, ApolloClient } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { HttpLink } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
  }),
  cache: new InMemoryCache(),
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Router />
    </ApolloProvider>
  </StrictMode>,
)
