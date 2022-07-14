import { render, screen } from '@testing-library/react'
import CalculatorNumbers from './CalculatorNumbers'

describe('Tests for calculator numbers', () => {
  beforeEach(() => {
    render(<CalculatorNumbers />)
  })

  test('should render 0 to 9 numbers', () => {
    const numbers = screen.getAllByText(/[0-9]/)
    expect(numbers).toHaveLength(10)
  })
})
