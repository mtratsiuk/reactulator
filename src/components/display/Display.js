import React from 'react'
import { connect } from 'react-redux'

import './Display.less'

const Display = ({ expression, error, active }) => (
  <section className='Display'>
    {active ? expression : 'OFF'}
    <br />
    {error}
  </section>
)

export default connect(
  state => ({
    expression: state.expression,
    error: state.evaluationError,
    active: state.active
  })
)(Display)
