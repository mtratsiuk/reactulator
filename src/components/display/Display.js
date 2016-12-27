import React from 'react'
import { connect } from 'react-redux'

import { expressionChanged } from '../../actions'

import './Display.less'

const renderError = error =>
  <div className='Display__error'>
    {error}
  </div>

const renderHistory = history =>
  <div className='Display__history-container'>
    <div className='Display__history-rows'>
      {history.map((h, i) =>
        <div className='Display__history-row' key={`${h.expression}#${i}`}>
          <span className='Display-history-row__expression'>
            {h.expression}
          </span>
          <span className='Display-history-row__equal-sign'>=</span>
          <span className='Display-history-row__result'>
            {h.result}
          </span>
        </div>
      )}
    </div>
  </div>

const renderExpression = (expression, onExpressionChange) =>
  <div className='Display__expression-container'>
    <input type='text'
      className='Display__expression'
      value={expression}
      onChange={onExpressionChange}
      />
  </div>

const Display = ({
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
