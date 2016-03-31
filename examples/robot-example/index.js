import 'babel-polyfill'
import compose from '@f/compose'
import flatten from '@f/flatten-gen'
var {robot, move, sleep, read, runAction} = require('ev3-client')
var composable = require('yoco').composable
var run = robot('192.168.1.6')
var cycle = require('../../src/index')
var out = cycle.out

cycle(composable([run.mw])(compose(runAction, flatten(main))), {
  title: 'ev3'
})

var steer = move('b', 'c')

function * main (input, arg2) {
  var devices = yield read()
  yield out(devices.ir(4))
  yield forward(arg2)
}

function * forward (rots) {
  yield steer.rotations(rots, 40, 0)
  yield out('done')
}
