import { render, screen } from '@testing-library/react';
import App from './App';
import Main from '../src/Main/Main.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(Main).toBeInTheDocument();
});
