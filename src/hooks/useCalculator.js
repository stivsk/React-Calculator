import { useState } from 'react';

let activeOperation = null;

const useCalculator = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleNumbers = e => {
    if (displayValue === '0') {
      setDisplayValue(e.target.name);
      return;
    }

    setDisplayValue(pv => pv + e.target.name);
  };

  const handleOperators = operation => {
    activeOperation = operation(parseFloat(displayValue));
    setDisplayValue('0');
  };

  const handleFunctions = e => {
    const functions = {
      '=': () => {
        if (activeOperation === null) return;

        const result = activeOperation(parseFloat(displayValue));
        setDisplayValue(result.toString());
      },
      CE: () => {
        setDisplayValue('0');

        activeOperation = null;
      },
    };

    return functions[e.target.name]();
  };

  const handleDisplayValue = e => {
    const { value } = e.target;

    if (Number.isNaN(Number(value))) return;

    if (displayValue === '0' && value !== '0.') {
      setDisplayValue(parseFloat(value).toString());
      return;
    }

    setDisplayValue(value);
  };

  return {
    displayValue,
    handleDisplayValue,
    handleNumbers,
    handleOperators,
    handleFunctions,
  };
};

export default useCalculator;
