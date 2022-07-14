import { render, screen } from '@testing-library/react'
import CalculatorFunctions from './CalculatorFunctions'

const functions = ['CE', '=']

describe('Tests for calculator funtions', () => {
  beforeEach(() => {
    render(<CalculatorFunctions />)
  })

  test.each(functions)('should render functions', operator => {
    const op = screen.getByText(operator)
    expect(op).toBeInTheDocument()
  })
})
