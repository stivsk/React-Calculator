const calculatorNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function CalculatorNumbers({ onClick }) {
  return calculatorNumbers.map(number => (
    <button key={number} type="button" name={number} onClick={onClick}>
      {number}
    </button>
  ));
}

export default CalculatorNumbers;
