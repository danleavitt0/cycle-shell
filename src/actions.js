const SUBMIT = 'SUBMIT'
const INITIALIZE = 'INITIALIZE'

function initializeApp () {
  return {
    type: 'INITIALIZE'
  }
}

function submit (v, n) {
  return {
    type: SUBMIT,
    payload: {
      verb: v,
      noun: n
    }
  }
}

export {
  submit,
  initializeApp,

  INITIALIZE,
  SUBMIT
}
