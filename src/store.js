import {applyMiddleware, createStore} from 'redux'
import reducer from './reducer'
import dom from 'virtex-dom'
import component from 'virtex-component'
import parse from './middleware/parse'

const createStoreWithMiddleware = applyMiddleware(
  dom(document),
  component,
  parse
)(createStore)

export default initialState => createStoreWithMiddleware(reducer, initialState)
