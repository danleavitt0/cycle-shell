import _ from 'lodash'
import {SUBMIT, INITIALIZE} from './actions'
import ephemeral from 'redux-ephemeral'

function reducer (update, state, action) {
  console.log(action.type)
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        log: [...state.log, state.user]
      }
    case SUBMIT:
      const stateCopy = _.clone(state.user, true)
      let {verb, noun} = action.payload
      const user = update(stateCopy, verb, noun)
      return {
        ...state,
        user: user,
        log: [...state.log, user]
      }
  }
  return ephemeral(state, action)
}

export default update => reducer.bind(this, update)
