import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import App from './App'
import { todoStore } from './stores/TodoStore'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={todoStore}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
)
