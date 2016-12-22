import { actionTypes as numericActionTypes } from '../actions/numeric'

export const display = (state = [], action) => {
  switch (action.type) {
    case numericActionTypes.NUMERIC_CLICK:
      return state.concat(action.payload)
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
