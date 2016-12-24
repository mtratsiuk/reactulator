import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import App from './App'

test('App starts without crash', t => {
  shallow(<App />)
})
