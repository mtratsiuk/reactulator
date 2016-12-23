export const actionTypes = {
  EXPRESSION_KEY_CLICK: 'EXPRESSION_KEY_CLICK'
}

export const expressionClick = value => ({
  type: actionTypes.EXPRESSION_KEY_CLICK,
  payload: value
})
