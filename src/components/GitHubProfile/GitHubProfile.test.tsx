// // ./test-utils.tsx sets up a custom render that could be
// // used to access global context providers, data stores etc.
// // https://testing-library.com/docs/react-testing-library/setup#custom-render

import { render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { QueryCache } from 'react-query';

import { screen } from '../../../test-utils';
import { handlers } from '../../mocks/handlers';
import GitHubProfile from './GitHubProfile';

const queryCache = new QueryCache();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

// https://testing-library.com/docs/react-testing-library/example-intro/#full-example

const server = setupServer(
  // capture "GET /greeting" requests
  rest.get('/greeting', (req, res, ctx) => {
    // respond using a mocked JSON body
    return res(ctx.json({ greeting: 'hello there' }));
  }),
);

// establish API mocking before all tests
beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());

afterEach(() => {
  queryCache.clear();
});

describe('GitHubProfile', () => {
  test('it renders 2 mocked followers', async () => {
    server.use(...handlers);

    render(
      <QueryClientProvider client={queryClient}>
        <GitHubProfile user="nickFalcone" />
      </QueryClientProvider>,
    );
    const followers = await screen.findAllByRole('listitem');
    expect(followers.length).toBe(2);
  });
});
