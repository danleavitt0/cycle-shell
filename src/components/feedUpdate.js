import element from 'vdom-element'
import localize, {localAction} from 'vdux-local'
import {submit} from '../actions'
import _ from 'lodash'

const ENTER_KEY = 13

const SET_TEXT = 'SET_TEXT'
const SET_FOCUS = 'SET_FOCUS'
const REMOVE_FOCUS = 'REMOVE_FOCUS'
const setText = localAction(SET_TEXT)
const setFocus = localAction(SET_FOCUS)
const removeFocus = localAction(REMOVE_FOCUS)

const getStyles = () => {
  return {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '15px'
    },
    input: {
      padding: '10px',
      width: '80%',
      fontSize: '16px',
      borderRadius: '10px',
      border: '1px solid rgba(51,51,51,0.2)',
      textIndent: '25px',
      transition: 'all .3s ease-in-out',
      outline: 'none'
    },
    caret: {
      transition: 'color .3s ease-in-out',
      position: 'relative',
      color: 'rgba(51,51,51,0.2)',
      left: '25px'
    },
    focusedInput: {
      border: '1px solid rgba(51,51,51,0.7)'
    },
    focusedCaret: {
      color: 'rgba(51,51,51,0.7)'
    }
  }
}

const merge = (base, ...args) => _.defaultsDeep(base, ...args)

function initialState () {
  return {
    text: '',
    focus: true
  }
}

function render ({key, state}, childState) {
  let styles = getStyles()
  let {text, focus} = state

  return (
    <div style={styles.container}>
      <div style={focus ? merge(styles.focusedCaret, styles.caret) : styles.caret}> > </div>
      <input
        autofocus
        style={focus ? merge(styles.focusedInput, styles.input) : styles.input}
        type='text'
        value={text}
        ev-focus={handleFocus}
        ev-blur={handleBlur}
        ev-keyup={handleSubmit} />
    </div>
  )

  function handleFocus () {
    return setFocus(key)
  }

  function handleBlur () {
    return removeFocus(key)
  }

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
    case SET_FOCUS:
      return {
        ...state,
        focus: true
      }
    case REMOVE_FOCUS:
      return {
        ...state,
        focus: false
      }
  }
  return state
}

export default localize({
  initialState,
  reducer,
  render
})
