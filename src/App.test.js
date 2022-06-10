import { render, screen } from '@testing-library/react';
import App from './routes/App';

test('renders without crashing', () => {
  render(<App />);
  const title = screen.getByText(/Last Search/i);
  expect(title).toBeInTheDocument();
})
