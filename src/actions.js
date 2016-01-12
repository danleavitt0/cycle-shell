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
    let split = value.split(' ')
    return {
      type: SUBMIT,
      payload: {
        verb: split[0].trim(),
        noun: split[1] ? split[1].trim() : ''
      }
    }
  }
}

export {
  submit,
  initializeApp,

  INITIALIZE,
  SUBMIT
}
