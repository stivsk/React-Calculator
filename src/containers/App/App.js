import Calculator from '../../components/Calculator/Calculator'
import CalculatorState from '../../contexts/calculator/CalculatorState'

function App() {
  return (
    <div role="main">
      <CalculatorState>
        <Calculator />
      </CalculatorState>
    </div>
  )
}

export default App
