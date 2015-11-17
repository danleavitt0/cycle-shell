var Zork = require('../src').createGame

var initialState = {
  name: 'Daniel',
  message: 'Welcome to the game. Type commands into the input above to start.'
}

function update (state, verb, noun) {
  if (verb === 'user') {
    if (noun) {
      state.name = noun
      state.message = noun
    } else {
      state.message = state.name
    }
  } else {
    state.message = 'Command not found'
  }
  return state
}

function view (state) {
  var view = ''
  if (state.message) {
    view += state.message
  }
  return view
}

var game = Zork(initialState, update, view)
game()
