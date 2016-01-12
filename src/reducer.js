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
      const stateCopy = _.clone(state.user, true)
      const {verb, noun} = action.payload
      const user = update(stateCopy, verb, noun)
      const prevAction = `${verb} ${noun}`
      return {
        ...state,
        user: user,
        log: [...state.log, {...user, action: prevAction}]
      }
  }
  return state
}

export default update => reducer.bind(this, update)
