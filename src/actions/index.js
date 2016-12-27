import { evalExpression } from '../services/math'

export const actionTypes = {
  EXPRESSION_KEY_CLICK: 'EXPRESSION_KEY_CLICK',
  EXPRESSION_CHANGED: 'EXPRESSION_CHANGED',
  EQUALS_KEY_CLICK: 'EQUALS_KEY_CLICK',
  BACKSPACE_KEY_CLICK: 'BACKSPACE_KEY_CLICK',
  CLEAR_KEY_CLICK: 'CLEAR_KEY_CLICK',
  EXPRESSION_EVALUATED: 'EXPRESSION_EVALUATED',
  EXPRESSION_EVALUATION_ERROR: 'EXPRESSION_EVALUATION_ERROR'
}

export const expressionClick = value => ({
  type: actionTypes.EXPRESSION_KEY_CLICK,
  payload: value
})

export const expressionChanged = expr => ({
  type: actionTypes.EXPRESSION_CHANGED,
  payload: expr
})

export const equalsClick = () => async (dispatch, getState) => {
  const { expression } = getState()
  dispatch({ type: actionTypes.EQUALS_KEY_CLICK })
  try {
    const result = await evalExpression(expression)
    dispatch({
      type: actionTypes.EXPRESSION_EVALUATED,
      payload: { result, expression }
    })
  } catch (error) {
    dispatch({
      type: actionTypes.EXPRESSION_EVALUATION_ERROR,
      payload: error
    })
  }
}

export const backspaceClick = () => ({
  type: actionTypes.BACKSPACE_KEY_CLICK
})

export const clearClick = () => ({
  type: actionTypes.CLEAR_KEY_CLICK
})
