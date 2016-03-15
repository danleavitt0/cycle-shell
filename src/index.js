import element from 'virtex-element'
import reducer from './reducer'
import vdux from 'vdux/dom'
import App from './app'
import reduce from '@f/reduce'
import multi from 'redux-multi'

const defaultView = output => {
  if (typeof (output) !== 'object' || output.props) {
    return output
  } else {
    return reduce((arr, item, key) => {
      arr.push(`${key}: ${item}`)
      return arr
    }, [], output).join('\n')
  }
}

module.exports = (userUpdate = () => {}, initialState = {}, view = defaultView) => {
  vdux({
    reducer: reducer(userUpdate),
    initialState: {log: [typeof (initialState) === 'string' && {output: initialState}], user: initialState},
    app: state => <App log={state.log} view={view} user={state.user} {...state} />,
    middleware: [
      multi
    ]
  })
}
