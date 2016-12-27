import React from 'react'

import './Calculator.less'

import Display from '../display/Display'
import ButtonGroup from '../button-group/ButtonGroup'

import numericBtns from './numeric-buttons'
import actionBtns from './action-buttons'
import secondaryBtns from './secondary-buttons'

const Calculator = () =>
  <section className='Calculator'>
    <header className='Calculator__header'>
      Reactulator
    </header>
    <div className='Calculator__display-container'>
      <Display />
    </div>
    <div className='Calculator__keyboard-container'>
      <ButtonGroup buttons={secondaryBtns} groupName={'secondary'} />
      <ButtonGroup buttons={numericBtns} groupName={'numeric'} />
      <ButtonGroup buttons={actionBtns} groupName={'action'} />
    </div>
  </section>

export default Calculator
