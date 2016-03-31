import isGenerator from '@f/is-generator'
import {logProcess, initProcess, SUBMIT, OUT} from '../actions'
import {composable} from 'yoco'

var processCount = 0
const handleSubmit = userUpdate => ({dispatch}) => next => action => {
  if (action.type === SUBMIT) {
    var processId = processCount++
    dispatch(initProcess(processId, action.payload.join(' ')))
    if (isGenerator(userUpdate)) {
      const mw = ({dispatch}) => next => action => {
        if (action.type === OUT) {
          return dispatch(logProcess(processId, action.payload))
        }
        return next(action)
      }
      console.log('userUpdate', userUpdate)
      var gen = composable([mw])(userUpdate)
      return dispatch(gen(...action.payload))
    } else {
      return dispatch(logProcess(processId, userUpdate(...action.payload)))
    }
  }
  return next(action)
}

export default handleSubmit
