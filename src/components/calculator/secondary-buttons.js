import { expressionClick } from '../../actions/keyboard'

export default 'ON,MR,M+,M-'.split(',').map(k => ({
  text: k,
  action: () => {}
}))
