import React from 'react'
import { connect } from 'react-redux'

const Display = ({ numbers, active }) => (
  <section>
    {active ? numbers.join('') : 'OFF'}
  </section>
)

export default connect(
  state => ({
    numbers: state.display,
    active: state.active
  })
)(Display)
