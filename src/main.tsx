import { ChakraProvider, theme } from '@chakra-ui/react'
import { StoreProvider } from 'easy-peasy'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { todoStore } from './stores/TodoStore'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <StoreProvider store={todoStore}>
        <App />
      </StoreProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
