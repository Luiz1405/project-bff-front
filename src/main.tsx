import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from './router'
import { GlobalStyles } from './components/GlobalStyles/index.tsx'
import { InMemoryCache, ApolloClient } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
} as any)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Router />
    </ApolloProvider>
  </StrictMode>,
)
