import './css/index.css';

import { hydrateRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;
hydrateRoot(rootElement, <App />);
