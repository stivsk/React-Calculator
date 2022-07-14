import { useContext, useState } from 'react'
import CalculatorContext from '../contexts/calculator/CalculatorContext'

let activeOperation = null

const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState('0')
  const { addResultToHistory, resultsHistory } = useContext(CalculatorContext)

  const handleNumbers = ({ target }) => {
    if (displayValue === '0') {
      setDisplayValue(target.value)
      return
    }

    setDisplayValue(pv => pv + target.value)
  }

  const handleOperators = operation => {
    activeOperation = operation(parseFloat(displayValue))
    setDisplayValue('0')
  }

  const handleFunctions = ({ target }) => {
    const functions = {
      '=': () => {
        if (activeOperation !== null) {
          const result = activeOperation(parseFloat(displayValue)).toString()

          setDisplayValue(result)
          addResultToHistory(result)
        }
      },
      CE: () => {
        setDisplayValue('0')
        activeOperation = null
      },
    }

    return functions[target.name]()
  }

  const handleDisplayValue = ({ target }) => {
    const { value } = target

    if (Number.isNaN(Number(value))) return

    setDisplayValue(parseFloat(value || 0).toString())
  }

  return {
    displayValue,
    resultsHistory,
    handleDisplayValue,
    handleNumbers,
    handleOperators,
    handleFunctions,
  }
}

export default useCalculator
