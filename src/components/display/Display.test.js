import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { shorten } from '../../services/math'

import { Display, renderError } from './Display'

const noop = () => {}

test('#renderError should render visible error', t => {
  const wrapper = shallow(renderError('Error'))
  t.truthy(wrapper.prop('style').opacity)
})

test('#renderError should render invisible error', t => {
  const wrapper = shallow(renderError(''))
  t.falsy(wrapper.prop('style').opacity)
})

test('#Display renders correctly when active', t => {
  const props = {
    expression: '2+2/',
    history: [{ result: 5, expression: '2+3' }],
    error: 'Unexpected char',
    active: true,
    onExpressionChange: noop
  }
  const wrapper = shallow(<Display {...props} />)

  t.is(wrapper.find('.Display__error').text(), props.error)
  t.is(
    wrapper.find('.Display__history-row').text(),
    `${props.history[0].expression}=${shorten(props.history[0].result)}`
  )
  t.is(wrapper.find('.Display__expression').prop('value'), props.expression)
})
