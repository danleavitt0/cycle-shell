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
        type: 'UPDATE',
        payload: {
          verb: match,
          noun: parts[1] ? parts[1].toLowerCase : ''
        }
      })
    }
    else {
      store.dispatch({
        type: 'INVALID'
      })
    }
  }
  return next(action)
}

export default parse
