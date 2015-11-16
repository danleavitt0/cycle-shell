const parse = store => next => action => {
  if (action.type === 'SUBMIT') {
    let parts = action.payload.value.split(' ')
    store.dispatch({
      type: 'UPDATE',
      payload: {
        verb: parts[0],
        noun: parts[1] ? parts[1].toLowerCase : ''
      }
    })
  }
  return next(action)
}

export default parse
