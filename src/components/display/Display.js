import React from 'react'
import { connect } from 'react-redux'

const Display = ({ expression, active }) => (
  <section>
    {active ? expression : 'OFF'}
  </section>
)

export default connect(
  state => ({
    expression: state.expression,
    active: state.active
  })
)(Display)
