const calculatorOperators = [
  { symbol: '+', operation: a => b => a + b },
  { symbol: '-', operation: a => b => a - b },
  { symbol: '*', operation: a => b => a * b },
  { symbol: '/', operation: a => b => a / b },
]

function CalculatorOperators({ onClick }) {
  return calculatorOperators.map(operator => (
    <button
      key={operator.symbol}
      type="button"
      name={operator.symbol}
      onClick={() => onClick(operator.operation)}
    >
      {operator.symbol}
    </button>
  ))
}

export default CalculatorOperators
