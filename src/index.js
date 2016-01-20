import createStore from './store'
import element from 'virtex-element'
import {initializeApp} from './actions'
import reducer from './reducer'
import vdux from 'vdux/dom'
import App from './app'
import logger from 'redux-logger'
import multi from 'redux-multi'

const defaultView = state => {
  if (typeof (state.output) === 'object') {
    let arr = []
    for (let key in state.output) {
      arr.push(`${key}: ${state.output[key]}`)
    }
    return arr.join('\n')
  } else {
    return state.output
  }
}

const initState = {
  headerColor: 'lightblue',
  headerTextColor: '#333'
}

module.exports = (userUpdate = () => {}, initialState = initState, view = defaultView) => {
  vdux({
    reducer: reducer(userUpdate),
    initialState: {log: [], user: initialState},
    app: state => <App log={state.log} view={view} user={state.user} {...state} />,
    middleware: [
      logger(),
      multi
    ]
  })
}
