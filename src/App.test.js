import { render, screen } from '@testing-library/react';
import App from './App';

test('renders all cards and comment fields', () => {
  render(<App />);
  expect(screen.getByText('IMRANE LAOUNI')).toBeInTheDocument();
  expect(screen.getByText('SARA')).toBeInTheDocument();
  expect(screen.getAllByPlaceholderText('Write a comment...')).toHaveLength(4);
});
