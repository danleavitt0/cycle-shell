import createStore from './store'
import element from 'vdom-element'
import {listen} from 'virtual-component'
import {handleOnce} from 'redux-effects-events'
import {initializeApp} from './actions'
import vdux from 'vdux'
import App from './app'

export default (initialState, userUpdate = () => {}, view = () => {}) => {
  const store = createStore({log: [], user: initialState}, userUpdate)

  function start () {
    listen(store.dispatch)
    store.dispatch(initializeApp())
    vdux(store, state => <App key='app' state={state.app} view={view} {...state} />, document.body)
  }

  return start
}
