import createStore from './store'
import element from 'virtex-element'
import {initializeApp} from './actions'
import reducer from './reducer'
import vdux from 'vdux/dom'
import App from './app'
import reduce from '@f/reduce'
import logger from 'redux-logger'
import multi from 'redux-multi'

const defaultView = output => {
  if (typeof (output) === 'object') {
    return reduce((arr, item, key) => {
      arr.push(`${key}: ${item}`)
      return arr
    }, [], output).join('\n')
  } else {
    return output
  }
}

module.exports = (userUpdate = () => {}, initialState = {}, view = defaultView) => {
  vdux({
    reducer: reducer(userUpdate),
    initialState: {log: [], user: initialState},
    app: state => <App log={state.log} view={view} user={state.user} {...state} />,
    middleware: [
      multi
    ]
  })
}
