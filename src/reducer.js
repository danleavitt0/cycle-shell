import _ from 'lodash'
import {SUBMIT, INITIALIZE} from './actions'

function reducer (update, state, action) {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        log: [...state.log, state.user]
      }
    case SUBMIT:
      // const stateCopy = _.clone(state.user, true)
      const output = update(...action.payload)
      const prevAction = action.payload.join(' ')
      return {
        ...state,
        log: [...state.log, {action: prevAction, output}]
      }
  }
  return state
}

export default update => reducer.bind(this, update)
