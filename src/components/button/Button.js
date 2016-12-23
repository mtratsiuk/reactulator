import React from 'react'

import './Button.less'

const Button = ({ onClick, children }) => (
  <button onClick={onClick} className='Button'>
    {children}
  </button>
)

export default Button
