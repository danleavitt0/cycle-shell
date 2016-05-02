import isGenerator from '@f/is-generator'
import {logProcess, initProcess, SUBMIT, OUT} from '../actions'
import {composable} from 'yoco'
import Emitter from 'component-emitter'

var processCount = 0
var countEmitter = new Emitter()

const handleSubmit = (userUpdate) => ({dispatch}) => (next) => (action) => {
  if (action.type === SUBMIT) {
    var processId = processCount++
    countEmitter.emit('count', processCount)
    dispatch(initProcess(processId, action.payload.join(' ')))
    if (isGenerator(userUpdate)) {
      const mw = ({dispatch}) => (next) => (action) => {
        if (action.type === OUT) {
          return dispatch(logProcess(processId, action.payload))
        }
        return next(action)
      }
      var gen = composable([mw])(userUpdate)
      return dispatch(gen(...action.payload))
    } else {
      return dispatch(logProcess(processId, userUpdate(...action.payload)))
    }
  }
  return next(action)
}

export {countEmitter}
export default handleSubmit
