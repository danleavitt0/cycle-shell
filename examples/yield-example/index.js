var cycleShell = require('../../src/index')
cycleShell(main)
var out = cycleShell.out
import 'babel-polyfill'
import sleep from '@f/sleep'


function * main () {
  var i = 0
  while (true) {
    yield out(i++)
    yield sleep(2000)
  }
}
