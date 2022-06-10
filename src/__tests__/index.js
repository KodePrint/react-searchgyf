import { fireEvent, render, screen } from '@testing-library/react';
import App from '../routes/App';

test('home work as expected', () => {
})

test('search from could be used', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  fireEvent.change(input, { target: { value: 'caca' } })
  const button = await screen.findByRole('button')
  fireEvent.click(button)

  const title = await screen.findByText('caca')
  expect(title).toBeVisible()
}) 
