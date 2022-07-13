import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import App from './App'

test('renders app', async () => {
  await act(() => {
    render(<App />)
  })

  const main = screen.getByRole('main')

  expect(main).toBeInTheDocument()
})
