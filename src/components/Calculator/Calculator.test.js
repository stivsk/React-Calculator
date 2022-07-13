import { render, fireEvent, screen, act } from '@testing-library/react'
import Calculator from './Calculator'

let calcContainer

describe('Tests for Calculator operations', () => {
  beforeEach(async () => {
    await act(() => {
      calcContainer = render(<Calculator />)
    })
  })

  test('should render calculator container', () => {
    expect(calcContainer.container).toBeInTheDocument()
  })

  test('should add two numbers', () => {
    const resultInput = screen.getByLabelText('result')

    const number0 = screen.getByText('0')
    const number1 = screen.getByText('1')
    const number2 = screen.getByText('2')

    const operator = screen.getByText('+')
    const equals = screen.getByText('=')

    fireEvent.click(number1)
    fireEvent.click(number0)

    fireEvent.click(operator)

    fireEvent.click(number2)
    fireEvent.click(equals)

    expect(resultInput.value).toBe('12')
  })

  test('should substract two numbers', () => {
    const resultInput = screen.getByLabelText('result')

    const number0 = screen.getByText('0')
    const number1 = screen.getByText('1')
    const number2 = screen.getByText('2')

    const operator = screen.getByText('-')
    const equals = screen.getByText('=')

    fireEvent.click(number1)
    fireEvent.click(number0)

    fireEvent.click(operator)

    fireEvent.click(number2)
    fireEvent.click(equals)

    expect(resultInput.value).toBe('8')
  })

  test('should multiply two numbers', () => {
    const resultInput = screen.getByLabelText('result')

    const number0 = screen.getByText('0')
    const number1 = screen.getByText('1')
    const number2 = screen.getByText('2')

    const operator = screen.getByText('*')
    const equals = screen.getByText('=')

    fireEvent.click(number1)
    fireEvent.click(number0)

    fireEvent.click(operator)

    fireEvent.click(number2)
    fireEvent.click(equals)

    expect(resultInput.value).toBe('20')
  })

  test('should divide two numbers', () => {
    const resultInput = screen.getByLabelText('result')

    const number0 = screen.getByText('0')
    const number1 = screen.getByText('1')
    const number2 = screen.getByText('2')

    const operator = screen.getByText('/')
    const equals = screen.getByText('=')

    fireEvent.click(number1)
    fireEvent.click(number0)

    fireEvent.click(operator)

    fireEvent.click(number2)
    fireEvent.click(equals)

    expect(resultInput.value).toBe('5')
  })

  test('should clear calculator', () => {
    const CE = screen.getByText('CE')
    const equals = screen.getByText('=')

    fireEvent.click(CE)
    fireEvent.click(equals)
  })
})
