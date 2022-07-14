// Action names
const ADD_RESULT_TO_HISTORY = 'calculator/ADD_RESULT_TO_HISTORY'

// Initial State
export const initialState = {
  resultsHistory: [],
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  const cases = {
    [ADD_RESULT_TO_HISTORY]: {
      ...state,
      resultsHistory: [...state.resultsHistory, action.payload],
    },
  }

  return cases[action.type] || state
}

// Action Creators
export const addResultToHistoryAction = payload => ({
  type: ADD_RESULT_TO_HISTORY,
  payload,
})
