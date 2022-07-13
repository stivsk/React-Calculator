import styles from './functions.module.scss'

const calculatorFunctions = ['CE', '=']

function CalculatorFunctions({ onClick }) {
  return calculatorFunctions.map(func => (
    <button
      key={func}
      type="button"
      name={func}
      onClick={onClick}
      className={styles.functionButton}
    >
      {func}
    </button>
  ))
}

export default CalculatorFunctions
