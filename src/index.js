import createStore from './store'
import element from 'virtex-element'
import {initializeApp} from './actions'
import vdux from '../vdux'
import App from './app'

const defaultView = state => {
  if (typeof (state.message) === 'object') {
    let arr = []
    for (let key in state.message) {
      arr.push(`${key}: ${state.message[key]}`)
    }
    return arr.join('\n')
  } else {
    return state.message
  }
}

module.exports = (initialState, userUpdate = () => {}, view = defaultView) => {
  const store = createStore({log: [], user: initialState}, userUpdate)

  store.dispatch(initializeApp())
  vdux(store, state => <App key='app' state={state.app} view={view} {...state} />, document.body)
}
