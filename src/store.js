import {applyMiddleware, createStore} from 'redux'
import reducer from './reducer'
import effects from 'redux-effects'
import events from 'redux-effects-events'
import multi from 'redux-multi'

const middlewares = [
  multi,
  effects,
  events()
]

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export default (initialState, update) => createStoreWithMiddleware(reducer(update), initialState)
