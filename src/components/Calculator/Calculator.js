import { Suspense, lazy } from 'react'

import useCalculator from '../../hooks/useCalculator'
import CalculatorLoader from '../CalculatorLoader/CalculatorLoader'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

import styles from './calculator.module.scss'

const CalculatorFunctions = lazy(() =>
  import('../CalculatorFunctions/CalculatorFunctions')
)
const CalculatorNumbers = lazy(() =>
  import('../CalculatorNumbers/CalculatorNumbers')
)
const CalculatorOperators = lazy(() =>
  import('../CalculatorOperators/CalculatorOperators')
)
const CalculatorHistory = lazy(() =>
  import('../CalculatorHistory/CalculatorHistory')
)

function Calculator() {
  const {
    displayValue,
    resultsHistory,
    handleDisplayValue,
    handleNumbers,
    handleOperators,
    handleFunctions,
  } = useCalculator()

  return (
    <div className={styles.wrapper}>
      <div className={styles.calculator}>
        <input
          type="number"
          name="result"
          aria-label="result"
          value={displayValue}
          className={styles.displayValue}
          onChange={handleDisplayValue}
        />
        <ErrorBoundary fallback={<CalculatorLoader />}>
          <Suspense fallback={<CalculatorLoader />}>
            <CalculatorNumbers onClick={handleNumbers} />
            <CalculatorOperators onClick={handleOperators} />
            <CalculatorFunctions onClick={handleFunctions} />
            <CalculatorHistory history={resultsHistory} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default Calculator
