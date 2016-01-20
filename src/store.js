import reducer from './reducer'
import effects from 'redux-effects'
import events from 'redux-effects-events'
import client from 'vdux-preset-client'

const middlewares = [
  effects,
  events()
]

const createStoreWithMiddleware = client(...middlewares)

export default (initialState, update) => createStoreWithMiddleware(reducer(update), initialState)
