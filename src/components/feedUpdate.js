import element from 'vdux/element' // eslint-disable-line no-unused-vars

import createAction from '@f/create-action'
import {submit} from '../actions'
import merge from '../utils/merge'

const SET_TEXT = 'SET_TEXT'
const SET_FOCUS = 'SET_FOCUS'
const REMOVE_FOCUS = 'REMOVE_FOCUS'
const CLEAR_TEXT = 'CLEAR_TEXT'
const setText = createAction(SET_TEXT, (e) => e)
const setFocus = createAction(SET_FOCUS)
const clearText = createAction(CLEAR_TEXT)
const removeFocus = createAction(REMOVE_FOCUS)

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
      transition: 'border .3s ease-in-out',
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

function initialState () {
  return {
    text: '',
    focus: true
  }
}

function render ({props, state, local}) {
  const {text, focus} = state
  const styles = getStyles()
  const submitText = (e) => submit(text)

  return (
    <div style={styles.container}>
      <div style={focus ? merge(styles.focusedCaret, styles.caret) : styles.caret}> > </div>
      <input
        autofocus
        style={focus ? merge(styles.focusedInput, styles.input) : styles.input}
        type='text'
        value={text}
        onFocus={local(setFocus)}
        onBlur={local(removeFocus)}
        onInput={local(setText)}
        onKeyUp={{enter: text && [submitText, local(clearText)]}} />
    </div>
  )
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
    case CLEAR_TEXT:
      return {
        ...state,
        text: ''
      }
  }
  return state
}

export default {
  initialState,
  render,
  reducer
}
