import { useMemo, useReducer } from 'react'
import PropTypes from 'prop-types'
import CalculatorContext from './CalculatorContext'
import CalculatorReducer, {
  initialState,
  addResultToHistoryAction,
} from './CalculatorReducer'

function CalculatorState({ children }) {
  const [state, dispatch] = useReducer(CalculatorReducer, initialState)

  const addResultToHistory = result =>
    dispatch(addResultToHistoryAction(result))

  const providerValue = useMemo(
    () => ({
      ...state,
      addResultToHistory,
    }),
    [state]
  )

  return (
    <CalculatorContext.Provider value={providerValue}>
      {children}
    </CalculatorContext.Provider>
  )
}

CalculatorState.propTypes = {
  children: PropTypes.element.isRequired,
}

export default CalculatorState
