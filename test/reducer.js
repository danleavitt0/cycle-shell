import test from 'tape'
import reducer from '../src/reducer'
import {INIT_PROCESS, LOG_PROCESS} from '../src/actions'

test('reducer', (t) => {
  t.test('it should return the initial state', (subt) => {
    subt.deepEquals({log: []}, reducer(undefined, {type: 'INIT'}))
    subt.end()
  })
  t.test('it should handle INIT_PROCESS', (subt) => {
    const look = 'look'
    const action = {
      type: INIT_PROCESS,
      payload: {
        id: 0,
        argv: look
      }
    }
    subt.deepEquals({
      log: [{
        action: look,
        output: []
      }]
    }, reducer(undefined, action))
    subt.end()
  })
  t.test('it should handle LOG_PROCESS', (subt) => {
    const output = 'message'
    const id = 0
    const state = {
      log: [{
        action: 'test',
        output: []
      }]
    }
    const action = {
      type: LOG_PROCESS,
      payload: {
        id,
        output
      }
    }
    subt.deepEquals({
      log: [{
        action: 'test',
        output: [output]
      }]
    }, reducer(state, action))
    subt.end()
  })
  t.end()
})
