import { StyledEngineProvider } from '@mui/material/styles';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import './index.scss';

import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </StrictMode>
);

reportWebVitals();
