import { expressionClick } from '../../actions/keyboard'

export default '7894561230'.split('').map(k => ({
  text: k,
  action: expressionClick.bind(null, k)
}))
