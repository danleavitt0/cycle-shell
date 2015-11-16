import element from 'vdom-element'
import localize, {localAction} from 'vdux-local'
import {submit} from '../actions'

const ENTER_KEY = 13

const SET_TEXT = 'SET_TEXT'
const setText = localAction(SET_TEXT)

const getStyles = () => {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,99,71, 0.3)',
      padding: '15px'
    },
    input: {
      padding: '10px',
      width: '50%',
      fontSize: '16px'
    }
  }
}

function initialState () {
  return {
    text: ''
  }
}

function render ({key, state}, childState) {
  let styles = getStyles()
  let {text} = state

  return (
    <div style={styles.container}>
      <input
        autofocus
        style={styles.input}
        type='text'
        value={text}
        placeholder="What's next?"
        ev-keyup={handleSubmit} />
    </div>
  )

  function handleSubmit (e) {
    const text = e.target.value
    const parts = text.split(' ')
    const noun = parts[1] ? parts[1] : ''
    return text && e.which === ENTER_KEY
      ? [setText(key, ''), submit(parts[0], noun)]
      : setText(key, text)
  }
}

function reducer (state, action) {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.payload
      }
  }
  return state
}

export default localize({
  initialState,
  reducer,
  render
})
