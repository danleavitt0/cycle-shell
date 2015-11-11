import element from 'virtex-element'

function app ({text}) {
  return (
    <div>
      {text.map(sentence => <div>{sentence}</div>)}
      <input onKeyPress={e => handleSubmit(e)}/>
    </div>
  )
}

function handleSubmit (e) {
  let {value} = e.target
  if (e.keyCode === 13) {
    return {
      type: 'SUBMIT',
      payload: {
        value
      }
    }
  }
  else return {type: 'IGNORE'}
}

export default app
