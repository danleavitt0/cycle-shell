import {parse} from 'shell-quote'

const SUBMIT = 'SUBMIT'
const INITIALIZE = 'INITIALIZE'

function initializeApp () {
  return {
    type: 'INITIALIZE'
  }
}

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

export {
  submit,
  initializeApp,

  INITIALIZE,
  SUBMIT
}
