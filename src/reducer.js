import _ from 'lodash'

function reducer (update, state, action) {
  switch (action.type) {
    case 'UPDATE':
      const stateCopy = _.clone(state.user, true)
      let {verb, noun} = action.payload
      return {
        ...state,
        log: [...state.log, update(stateCopy, verb, noun)]
      }
  }
  return state
}

export default update => reducer.bind(this, update)
