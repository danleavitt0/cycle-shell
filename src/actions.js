import {parse} from 'shell-quote'

const INIT_PROCESS = 'INIT_PROCESS'
const LOG_PROCESS = 'LOG_PROCESS'
const SUBMIT = 'SUBMIT'
const OUT = 'OUT'

function submit () {
  return function (e) {
    let value = e.target.value
    let split = parse(value).map((item) => isNaN(item) ? item : parseFloat(item))
    return {
      type: SUBMIT,
      payload: split
    }
  }
}

function logProcess (id, output) {
  return {
    type: LOG_PROCESS,
    payload: {
      id,
      output
    }
  }
}

function initProcess (id, argv) {
  return {
    type: INIT_PROCESS,
    payload: {
      id,
      argv
    }
  }
}

function out (msg) {
  return {
    type: OUT,
    payload: msg
  }
}

export {
  submit,
  logProcess,
  initProcess,
  out,

  OUT,
  SUBMIT,
  LOG_PROCESS,
  INIT_PROCESS
}
