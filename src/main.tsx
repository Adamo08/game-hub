import React from 'react'
import ReactDOM from 'react-dom/client'

// 3rd party libs

import { ChakraProvider } from '@chakra-ui/react'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
