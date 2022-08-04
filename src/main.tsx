import './index.css';

import { worker } from 'mocks/browser';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// mock response when in test
if (process.env.NODE_ENV === 'test') {
  worker.start();
}

const container = document.getElementById('container') as Element;
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
