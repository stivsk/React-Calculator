import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useState } from 'react'

import styles from './history.module.scss'

function CalculatorHistory({ history }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={classNames(styles.results, {
        [styles.resultsOpen]: isOpen,
      })}
    >
      <button
        className={classNames(styles.actionButton, {
          [styles.actionButtonOpen]: isOpen,
        })}
        type="button"
        onClick={() => setIsOpen(pv => !pv)}
      >
        {isOpen ? 'X' : 'H'}
      </button>
      <h4>Results History</h4>
      <ul className={styles.resultsList}>
        {history.map(result => (
          <li className={styles.resultsListItem}>{result}</li>
        ))}
      </ul>
    </div>
  )
}

CalculatorHistory.propTypes = {
  history: PropTypes.arrayOf({}).isRequired,
}

export default CalculatorHistory
