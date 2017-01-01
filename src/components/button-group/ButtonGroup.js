import React from 'react'
import { connect } from 'react-redux'

import './ButtonGroup.less'

import Button from '../button/Button'

export const ButtonGroup = ({ buttons, dispatch, groupName }) =>
  <section className={`ButtonGroup ButtonGroup_${groupName}`}>
    {buttons.map(btn =>
      <Button onClick={() => dispatch(btn.action())}
        key={btn.text}
        className={btn.className}>
        {btn.text}
      </Button>
    )}
  </section>

export default connect(
  (_, props) => props
)(ButtonGroup)
