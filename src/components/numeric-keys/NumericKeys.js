import React from 'react'
import { connect } from 'react-redux'

import { numericClick } from '../../actions/numeric'

const NumericKeys = ({ dispatch }) => (
  <section>
    {'1234567890'.split('').map(
      k =>
        <button onClick={() => dispatch(numericClick(k))}
          key={k}>
          {k}
        </button>
    )}
  </section>
)

export default connect()(NumericKeys)
