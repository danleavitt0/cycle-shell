import _ from 'lodash'
import {SUBMIT, INITIALIZE} from './actions'

function reducer (update, state, action) {
  switch (action.type) {
    case SUBMIT:
      const prevAction = action.payload.join(' ')
      var newLog = _.clone(state.log, true)
      newLog.push({action: prevAction, output: update(...action.payload)})
      return {
        ...state,
        log: newLog
      }
  }
  return state
}

export default update => reducer.bind(this, update)
