import element from 'virtex-element'

function app ({log, view}) {
  return (
    <div>
      {log.map(step => view(step))}
      <input onKeyPress={e => handleSubmit(e)}/>
    </div>
  )
}

function handleSubmit (e) {
  let {value} = e.target
  if (e.keyCode === 13) {
    let parts = value.split(' ')
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
