import { actionTypes } from '../actions'

const trimZeroes = numStr => numStr.replace(/^0+/, '')

const defaultExpression = '0'

export const expression = (state = defaultExpression, action) => {
  switch (action.type) {
    case actionTypes.EXPRESSION_KEY_CLICK:
      return trimZeroes(state + action.payload) || defaultExpression
    case actionTypes.BACKSPACE_KEY_CLICK:
      return state.slice(0, -1)
    case actionTypes.CLEAR_KEY_CLICK:
      return defaultExpression
    case actionTypes.EXPRESSION_EVALUATED:
      return String(action.payload)
    default:
      return state
  }
}

export const evaluationError = (state = '', action) => {
  switch (action.type) {
    case actionTypes.EXPRESSION_EVALUATION_ERROR:
      return action.payload
    case actionTypes.EQUALS_KEY_CLICK:
      return ''
    default:
      return state
  }
}

export const active = (state = true, action) => {
  switch (action.type) {
    default:
      return state
  }
}
