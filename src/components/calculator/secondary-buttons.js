import { expressionClick, backspaceClick, clearClick } from '../../actions'

export default '()'.split('').map(k => ({
  text: k,
  action: expressionClick.bind(null, k)
})).concat({
  text: '⇐',
  action: backspaceClick
}).concat({
  text: 'C',
  action: clearClick
})
