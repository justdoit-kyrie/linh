import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from 'assets/theme';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './assets/styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>

  </StrictMode>
);




