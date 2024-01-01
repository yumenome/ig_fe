import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { ContextProvider } from './ContextProvider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <ChakraProvider>
      <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
      </React.StrictMode>
    </ChakraProvider>
  </ContextProvider>
)
