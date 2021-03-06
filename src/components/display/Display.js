import React from 'react'
import { connect } from 'react-redux'
import { shorten } from '../../services/math'

import { expressionChanged } from '../../actions'

import './Display.less'

export const renderError = error =>
  <div className='Display__error'
    style={{opacity: error ? 1 : 0}}>
    {error}
  </div>

export const renderHistory = history =>
  <div className='Display__history-container'>
    <div className='Display__history-rows'>
      {history.map((h, i) =>
        <div className='Display__history-row' key={i}>
          <span className='Display-history-row__expression'>
            {h.expression}
          </span>
          <span className='Display-history-row__equal-sign'>=</span>
          <span className='Display-history-row__result'>
            {shorten(h.result)}
          </span>
        </div>
      )}
    </div>
  </div>

export const renderExpression = (expression, onExpressionChange) =>
  <div className='Display__expression-container'>
    <input type='text'
      className='Display__expression'
      value={expression}
      onChange={onExpressionChange}
      />
  </div>

export const Display = ({
  expression,
  history,
  error,
  active,
  onExpressionChange
}) => !active
    ? <section className='Display' />
    : <section className='Display'>
      {renderError(error)}
      {renderHistory(history)}
      {renderExpression(expression, onExpressionChange)}
    </section>

export default connect(
  state => ({
    expression: state.expression,
    history: state.evaluationHistory,
    error: state.evaluationError,
    active: state.active
  }),
  dispatch => ({
    onExpressionChange: event => dispatch(
      expressionChanged(event.target.value)
    )
  })
)(Display)
