import React from 'react'
import { connect } from 'react-redux'

import './Display.less'

const renderError = error =>
  <div className='Display__error'>
    {error}
  </div>

const renderHistory = history =>
  <div className='Display__history-container'>
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

const renderExpression = expression =>
  <div className='Display__expression-container'>
    <div className='Display__expression'>
      {expression}
    </div>
  </div>

const Display = ({ expression, history, error, active }) =>
  !active
    ? <section className='Display' />
    : <section className='Display'>
      {renderError(error)}
      {renderHistory(history)}
      {renderExpression(expression)}
    </section>

export default connect(
  state => ({
    expression: state.expression,
    history: state.evaluationHistory,
    error: state.evaluationError,
    active: state.active
  })
)(Display)
