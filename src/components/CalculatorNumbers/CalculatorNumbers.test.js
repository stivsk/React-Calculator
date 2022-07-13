import { render, screen } from '@testing-library/react'
import CalculatorNumbers from './CalculatorNumbers';

test('should render 0 to 9 numbers', () => {
  render(<CalculatorNumbers />)

  const numbers = screen.getAllByText(/[0-9]/)
  expect(numbers).toHaveLength(10)
});