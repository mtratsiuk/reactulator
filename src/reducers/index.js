import { actionTypes as keyboardActionTypes } from '../actions/keyboard'

export const expression = (state = '0', action) => {
  switch (action.type) {
    case keyboardActionTypes.EXPRESSION_KEY_CLICK:
      return (state === '0') ? action.payload : state + action.payload
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
