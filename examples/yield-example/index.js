require('../../src/index')(main)
import 'babel-polyfill'
import sleep from '@f/sleep'

function * main () {
  var i = 0
  while (true) {
    yield {type: 'LOG', payload: i++}
    yield sleep(2000)
  }
}
