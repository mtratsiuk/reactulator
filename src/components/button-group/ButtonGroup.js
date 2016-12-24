import React, { Component } from 'react'
import { connect } from 'react-redux'

import './ButtonGroup.less'

import Button from '../button/Button'

class ButtonGroup extends Component {
  render () {
    const { buttons, dispatch, groupName } = this.props

    return (
      <section className={`ButtonGroup ButtonGroup_${groupName}`}>
        {buttons.map(btn =>
          <Button onClick={() => dispatch(btn.action())}
            key={btn.text}
            className={btn.className}>
            {btn.text}
          </Button>
        )}
      </section>
    )
  }
}

export default connect()(ButtonGroup)
