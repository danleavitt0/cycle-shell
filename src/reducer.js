import {update} from './API'

function reducer (state, action) {
  switch (action.type) {
    case 'UPDATE':
      let {verb, noun} = action.payload
      return update(state, verb, noun)
    case 'INVALID':
      return {
        ...state,
        text: [...state.text, 'Invalid verb/noun entry']
      }
  }
  return state
}

export default reducer
