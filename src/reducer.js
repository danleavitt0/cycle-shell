import _ from 'lodash'
import {SUBMIT, INITIALIZE} from './actions'

function reducer (update, state, action) {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        view: action.payload,
        log: [...state.log, state.user]
      }
    case SUBMIT:
      const stateCopy = _.clone(state.user, true)
      const user = update(stateCopy, ...action.payload)
      const prevAction = action.payload.join(' ')
      return {
        ...state,
        user: user,
        log: [...state.log, {...user, action: prevAction}]
      }
  }
  return state
}

export default update => reducer.bind(this, update)
