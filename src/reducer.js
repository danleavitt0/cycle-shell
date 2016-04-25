import _ from 'lodash'
import {LOG_PROCESS, INIT_PROCESS} from './actions'

const initState = {
  log: []
}

function reducer (state = initState, action) {
  var newLog
  switch (action.type) {
    case INIT_PROCESS:
      newLog = _.clone(state.log)
      newLog[action.payload.id] = {action: action.payload.argv, output: []}
      return {
        ...state,
        log: newLog
      }
    case LOG_PROCESS:
      newLog = _.clone(state.log)
      var processId = action.payload.id
      var process = newLog[processId] || {output: []}
      process.output.push(action.payload.output)
      return {
        ...state,
        log: newLog
      }
  }
  return state
}

export default reducer
