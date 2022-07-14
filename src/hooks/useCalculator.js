import { useState } from 'react'

let activeOperation = null

const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState('0')

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
          const result = activeOperation(parseFloat(displayValue))
          setDisplayValue(result.toString())
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
    handleDisplayValue,
    handleNumbers,
    handleOperators,
    handleFunctions,
  }
}

export default useCalculator
