import { expressionClick } from '../../actions'

export default '7,8,9,4,5,6,1,2,3,000,0,.'.split(',').map(k => ({
  text: k,
  action: expressionClick.bind(null, k)
}))
