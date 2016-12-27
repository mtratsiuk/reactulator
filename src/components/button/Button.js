import React from 'react'

import './Button.less'

const Button = ({ className, onClick, children }) =>
  <button onClick={onClick}
    className={'Button ' + (className ? `Button_${className}` : '')}>
    {children}
  </button>

export default Button
