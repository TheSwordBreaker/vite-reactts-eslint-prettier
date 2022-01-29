// ./test-utils.tsx sets up a custom render that could be
// used to access global context providers, data stores etc.
// https://testing-library.com/docs/react-testing-library/setup#custom-render

import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '../test-utils';
import App from './App';

describe('App', () => {
  test('renders App component with 2 images', () => {
    render(<App />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });

  test('the counter increments as expected', () => {
    render(<App />);
    const button = screen.getByRole('button');

    expect(button.textContent).toBe('Clicked 0 times');

    userEvent.click(button);
    expect(button.textContent).toBe('Clicked 1 time');
  });
});
