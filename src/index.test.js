import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';

test('renders teams', () => {
  const { getByText } = render(<App />);
  const element = getByText(/Teams/i);
  expect(element).toBeInTheDocument();
});
