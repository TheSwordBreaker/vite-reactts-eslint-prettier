import './css/index.css';

import App from './App';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root') ?? document.createElement('div');
const root = createRoot(rootElement!);

root.render(<App />);
