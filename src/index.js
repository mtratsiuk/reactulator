import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'

import * as reducers from './reducers'

const store = createStore(
  combineReducers({ ...reducers })
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
