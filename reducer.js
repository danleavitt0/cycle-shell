function reducer (state, action) {
  switch (action.type) {
    case 'NORTH':
      return {
        ...state,
        text: [action.payload.value, ...state.text],
        position: state.position + 1
      }
  }
  return state
}

export default reducer
