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
          setDisplayValue(activeOperation(parseFloat(displayValue)).toString())
        }
      },
      CE: () => {
        setDisplayValue('0')
        activeOperation = null
      },
    }

    return functions[target.name]()
  }

  const handleDisplayValue = e => {
    const { value } = e.target

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
