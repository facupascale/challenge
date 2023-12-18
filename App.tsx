import React from 'react'
import { NavigationContainer } from '@navigation/navigationContainer'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const App = (): React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer />
    </QueryClientProvider>
  )
}

export default App
