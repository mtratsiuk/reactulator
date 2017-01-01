import test from 'ava'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {
  equalsClick,
  expressionEvaluated,
  expressionEvaluationError
} from './index'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

test('#equalsClick should evaluate expression', async t => {
  const store = mockStore({ expression: '2+2' })
  await store.dispatch(equalsClick())

  const [, action] = store.getActions()
  t.deepEqual(
    action,
    expressionEvaluated(4, '2+2')
  )
})

test('#equalsClick should dispatch evaluation error', async t => {
  const store = mockStore({ expression: '2+' })
  await store.dispatch(equalsClick())

  const [, action] = store.getActions()

  t.is(
    action.type,
    expressionEvaluationError('Some error').type
  )

  t.is(
    typeof action.payload,
    'string'
  )
})
