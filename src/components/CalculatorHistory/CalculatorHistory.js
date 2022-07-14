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
      <h1>Results History</h1>
      <ul className={styles.resultsList}>
        {history.map(result => (
          <li key={result} className={styles.resultsListItem}>
            {result}
          </li>
        ))}
      </ul>
    </div>
  )
}

CalculatorHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
}

export default CalculatorHistory
