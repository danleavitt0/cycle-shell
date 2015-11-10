const verbs = [
  'north',
  'south',
  'east',
  'west',
  'move',
  'look'
]

const parse = store => next => action => {
  if (action.type === 'SUBMIT') {
    let parts = action.payload.value.split(' ')
    let match
    for (var verb of verbs) {
      match = parts[0].trim().toLowerCase() === verb.toLowerCase() ? verb : match
    }
    if (match) {
      store.dispatch({
        type: match.toUpperCase(),
        payload: {
          value: action.payload.value
        }
      })
    }
  }
  return next(action)
}

export default parse
