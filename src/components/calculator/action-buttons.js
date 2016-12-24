import { expressionClick, equalsClick } from '../../actions'

const advancedFuncs = ['sin', 'cos', 'tan', 'log']

export default '+,-,^,*,sin,cos,/,tan,log'.split(',').map(k => {
  const key = advancedFuncs.includes(k) ? `${k}(` : k
  return {
    text: k,
    action: expressionClick.bind(null, key)
  }
}).concat({
  text: '=',
  action: equalsClick,
  className: 'equals'
})

