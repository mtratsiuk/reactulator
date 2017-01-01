import test from 'ava'

import { expression, evaluationHistory, evaluationError } from './index'
import { actionTypes } from '../actions'

test('#expression reducer handles #EXPRESSION_KEY_CLICK', t => {
  t.is(
    expression('1+', {
      type: actionTypes.EXPRESSION_KEY_CLICK,
      payload: '2'
    }),
    '1+2'
  )
})

test('#expression reducer handles #EXPRESSION_KEY_CLICK', t => {
  t.is(
    expression('0', {
      type: actionTypes.EXPRESSION_KEY_CLICK,
      payload: '0'
    }),
    '0'
  )
})

test('#expression reducer handles #EXPRESSION_CHANGED', t => {
  t.is(
    expression('1+', {
      type: actionTypes.EXPRESSION_CHANGED,
      payload: '20+22'
    }),
    '20+22'
  )
})

test('#expression reducer handles #EXPRESSION_CHANGED', t => {
  t.is(
    expression('1+2+3', {
      type: actionTypes.EXPRESSION_CHANGED,
      payload: ''
    }),
    '0'
  )
})

test('#expression reducer handles #BACKSPACE_KEY_CLICK', t => {
  t.is(
    expression('43', {
      type: actionTypes.BACKSPACE_KEY_CLICK
    }),
    '4'
  )
})

test('#expression reducer handles #BACKSPACE_KEY_CLICK', t => {
  t.is(
    expression('4', {
      type: actionTypes.BACKSPACE_KEY_CLICK
    }),
    '0'
  )
})

test('#expression reducer handles #CLEAR_KEY_CLICK', t => {
  t.is(
    expression('12345678+856', {
      type: actionTypes.CLEAR_KEY_CLICK
    }),
    '0'
  )
})

test('#expression reducer handles #EXPRESSION_EVALUATED', t => {
  t.is(
    expression('20+22', {
      type: actionTypes.EXPRESSION_EVALUATED,
      payload: {
        expression: '20+22',
        result: 42
      }
    }),
    '42'
  )
})

test('#expressionHistory reducer handles #EXPRESSION_EVALUATED', t => {
  t.deepEqual(
    evaluationHistory([], {
      type: actionTypes.EXPRESSION_EVALUATED,
      payload: {
        expression: '20+22',
        result: 42
      }
    }),
    [{ expression: '20+22', result: 42 }]
  )
})

test('#expressionHistory reducer doesnt push the same expression', t => {
  t.deepEqual(
    evaluationHistory([{ expression: '20+22', result: 42 }], {
      type: actionTypes.EXPRESSION_EVALUATED,
      payload: {
        expression: '20+22',
        result: 42
      }
    }),
    [{ expression: '20+22', result: 42 }]
  )
})

test('#evaluationError reducer handles #EXPRESSION_EVALUATION_ERROR', t => {
  t.is(
    evaluationError('', {
      type: actionTypes.EXPRESSION_EVALUATION_ERROR,
      payload: 'Unexpected char'
    }),
    'Unexpected char'
  )
})

test('#evaluationError reducer handles #EQUALS_KEY_CLICK', t => {
  t.is(
    evaluationError('Unexpected char', {
      type: actionTypes.EQUALS_KEY_CLICK
    }),
    ''
  )
})
