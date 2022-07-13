import { render, screen } from '@testing-library/react'
import CalculatorFunctions from './CalculatorFunctions'

const functions = ['CE', '=']

test.each(functions)('should render functions', operator => {
  render(<CalculatorFunctions />)
  const op = screen.getByText(operator)
  expect(op).toBeInTheDocument()
})
