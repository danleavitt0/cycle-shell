var test = require('tape')
var cycle = require('../src/index')

test('it should work', (t) => {
  cycle(main)
  t.ok(true)
  t.end()

  function main (input) {
    return input
  }
})
