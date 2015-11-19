var Zork = require('../../src').createGame

var initialState = {
  name: 'Daniel',
  title: 'My Game',
  message: 'Welcome to the game. Type commands into the input above to start.',
  headerColor: 'lightblue',
  score: 0
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

var game = Zork(initialState, update)
game()
