import {LOG_PROCESS, INIT_PROCESS} from './actions'

function reducer (state, action) {
  switch (action.type) {
    case INIT_PROCESS:

    case LOG_PROCESS:
      return {
        ...state,
        log: action.payload
      }
  }
  return state
}

export default reducer
