const SUBMIT = 'SUBMIT'
const INITIALIZE = 'INITIALIZE'

function initializeApp (view) {
  return {
    type: 'INITIALIZE',
    payload: view
  }
}

function submit () {
  return function (e) {
    let value = e.target.value
    let split = value.match(/(?:[^\s"]+|"[^"]*")+/g).map((item) => isNaN(item) ? item : parseInt(item))
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
