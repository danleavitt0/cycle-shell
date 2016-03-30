import _ from 'lodash'
import {LOG_PROCESS, INIT_PROCESS} from './actions'

function reducer (state, action) {
  switch (action.type) {
    case INIT_PROCESS:
      var newLog = _.clone(state.log)
      newLog[action.payload.id] = {action: action.payload.argv, output: []}
      return {
        ...state,
        log: newLog
      }
    case LOG_PROCESS:
      var newLog = _.clone(state.log)
      var processId = action.payload.id
      var process = newLog[processId] || {}
      process.output.push(action.payload.output)
      return {
        ...state,
        log: newLog
      }
  }
  return state
}

export default reducer
