import React from 'react'

import Display from '../display/Display'
import NumericKeys from '../numeric-keys/NumericKeys'

const Calculator = (_, context) => (
  <section>
    <Display />
    <hr />
    <NumericKeys />
  </section>
)

export default Calculator
