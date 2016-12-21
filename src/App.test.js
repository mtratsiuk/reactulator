import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

test('Test works', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.text(), 'hello, world!')
})
