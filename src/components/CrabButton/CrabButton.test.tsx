// ./test-utils.tsx sets up a custom render that could be
// used to access global context providers, data stores etc.
// https://testing-library.com/docs/react-testing-library/setup#custom-render

import userEvent from '@testing-library/user-event';
import React from 'react';

import { render, screen } from '../../../test-utils';
import CrabButton from '../CrabButton';

describe('CrabButton', () => {
  test('renders CrabButton component with 2 images', () => {
    render(<CrabButton />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });

  test('the counter increments as expected', () => {
    render(<CrabButton />);
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('Clicked 0 times');

    userEvent.click(button);
    expect(button.textContent).toBe('Clicked 1 time');
  });
});
