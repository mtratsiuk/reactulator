import { actionTypes } from '../actions'

const trimZeros = numStr => numStr.replace(/^0+/, '')

const defaultExpression = '0'

const processExpression = expr => trimZeros(expr) || defaultExpression

export const expression = (state = defaultExpression, action) => {
  switch (action.type) {
    case actionTypes.EXPRESSION_KEY_CLICK:
      return processExpression(state + action.payload)
    case actionTypes.EXPRESSION_CHANGED:
      return processExpression(action.payload)
    case actionTypes.BACKSPACE_KEY_CLICK:
      return processExpression(state.slice(0, -1))
    case actionTypes.CLEAR_KEY_CLICK:
      return defaultExpression
    case actionTypes.EXPRESSION_EVALUATED:
      return String(action.payload.result)
    default:
      return state
  }
}

export const evaluationHistory = (state = [], action) => {
  switch (action.type) {
    case actionTypes.EXPRESSION_EVALUATED:
      if (state.length &&
          state[state.length - 1].expression === action.payload.expression) {
        return state
      }
      return state.concat(action.payload)
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
