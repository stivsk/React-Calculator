import { render, screen } from '@testing-library/react'
import CalculatorOperators from './CalculatorOperators';

const operators = ["+", "-", "*", "/"];

test.each(operators)('should render operators', (operator) => {
  render(<CalculatorOperators />)
  const op = screen.getByText(operator)
  expect(op).toBeInTheDocument()
});
