var Zork = require('../../src')
Zork(update)

function update (state, num1, op, num2) {
  state.output = num1
  return state
}
