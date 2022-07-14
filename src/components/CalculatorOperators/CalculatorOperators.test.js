import { render, screen } from '@testing-library/react'
import CalculatorOperators from './CalculatorOperators'

const operators = ['+', '-', '*', '/']

describe('Tests for calculator operator', () => {
  beforeEach(() => {
    render(<CalculatorOperators />)
  })

  test.each(operators)('should render operators', operator => {
    const op = screen.getByText(operator)
    expect(op).toBeInTheDocument()
  })
})
