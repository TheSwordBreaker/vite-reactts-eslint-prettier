import './index.css';

import { worker } from 'mocks/browser';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// mock response when in development
if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
