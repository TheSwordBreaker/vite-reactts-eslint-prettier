import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import CrabButton from './components/CrabButton/CrabButton';
import GitHubProfile from './components/GitHubProfile/GitHubProfile';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <a href="https://github.com/nickFalcone/vite-reactts-eslint-prettier-styled-components">
          https://github.com/nickFalcone/vite-reactts-eslint-prettier-styled-components
        </a>
        <p>A template frontend repo with the following tools / libraries set up:</p>
        <ul>
          <li>
            <a href="https://vitejs.dev/">Vite</a>
          </li>
          <li>
            <a href="https://reactjs.org/">React 17</a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/">TypeScript</a>
          </li>
          <li>
            <a href="https://eslint.org/">ESLint</a>
          </li>
          <li>
            <a href="https://prettier.io/">Prettier</a>
          </li>
          <li>
            <a href="https://styled-components.com/">Styled Components</a>
          </li>
          <li>
            <a href="https://react-query.tanstack.com/">React Query</a>
          </li>
          <li>
            <a href="https://mswjs.io/">Mock Service Worker</a>
          </li>
        </ul>
        <CrabButton />
        <GitHubProfile user="nickFalcone" />
      </QueryClientProvider>
    </>
  );
};

export default App;
