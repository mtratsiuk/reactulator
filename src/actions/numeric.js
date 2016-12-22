export const actionTypes = {
  NUMERIC_CLICK: 'NUMERIC_CLICK'
}

export const numericClick = value => ({
  type: actionTypes.NUMERIC_CLICK,
  payload: value
})
