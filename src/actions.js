import {parse} from 'shell-quote'

const INIT_PROCESS = 'INIT_PROCESS'
const LOG_PROCESS = 'LOG_PROCESS'
const SUBMIT = 'SUBMIT'

function submit () {
  return function (e) {
    let value = e.target.value
    let split = parse(value).map((item) => isNaN(item) ? item : parseInt(item))
    return {
      type: SUBMIT,
      payload: split
    }
  }
}

function logProcess () {

}

function initProcess () {

}

export {
  submit,
  logProcess,
  initProcess,

  SUBMIT,
  LOG_PROCESS,
  INIT_PROCESS
}
