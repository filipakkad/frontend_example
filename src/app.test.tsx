import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './app';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Zarejestruj sztab');
  expect(linkElement).toBeInTheDocument();
});
