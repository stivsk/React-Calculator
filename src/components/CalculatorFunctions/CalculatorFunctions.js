const calculatorFunctions = ['CE', '=']

function CalculatorFunctions({ onClick }) {
  return calculatorFunctions.map(func => (
    <button key={func} type="button" name={func} onClick={onClick}>
      {func}
    </button>
  ))
}

export default CalculatorFunctions
