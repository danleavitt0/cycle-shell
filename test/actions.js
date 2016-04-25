import test from 'tape'
import {
  initProcess,
  logProcess,
  submit,
  out,
  INIT_PROCESS,
  LOG_PROCESS,
  SUBMIT,
  OUT
} from '../src/actions'

test('actions', (t) => {
  let id = 0

  t.test('should create an action to init a process', (subt) => {
    const command = 'test'
    const expectedAction = {
      type: INIT_PROCESS,
      payload: {
        id,
        argv: command
      }
    }
    subt.deepEquals(initProcess(id, command), expectedAction)
    subt.end()
  })

  t.test('should create an action to log to a process', (subt) => {
    const output = 'message'
    const expectedAction = {
      type: LOG_PROCESS,
      payload: {
        id,
        output
      }
    }
    subt.deepEquals(logProcess(id, output), expectedAction)
    subt.end()
  })

  t.test('should create an action to submit text', (subt) => {
    const text = 'this is a test'
    const payload = ['this', 'is', 'a', 'test']
    const expectedAction = {
      payload,
      type: SUBMIT
    }
    subt.deepEquals(submit(text), expectedAction)
    subt.end()
  })

  t.test('should create an action for an out message', (subt) => {
    const payload = 'message'
    const expectedAction = {
      payload,
      type: OUT
    }
    subt.deepEquals(out('message'), expectedAction)
    subt.end()
  })
})
