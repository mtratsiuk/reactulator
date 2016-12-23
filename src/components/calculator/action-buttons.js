import { expressionClick } from '../../actions/keyboard'

export default '+-*/='.split('').map(k => ({
  text: k,
  action: expressionClick.bind(null, k)
}))
