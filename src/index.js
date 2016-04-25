import element from 'vdux/element' // eslint-disable-line no-unused-vars

import reducer from './reducer'
import vdux from 'vdux/dom'
import App from './app'
import reduce from '@f/reduce'
import ready from 'domready'
import flo from 'redux-flo'
import handleSubmit from './middleware/handleSubmit'
import {out} from './actions'
import isArray from '@f/is-array'

const defaultView = (output) => {
  if (typeof (output) !== 'object' || output.props) {
    return output
  } else if (isArray(output)) {
    output.join('\n')
  } else {
    return reduce((arr, item, key) => {
      arr.push(`${key}: ${item}`)
      return arr
    }, [], output).join('\n')
  }
}

const defaultOpts = {
  view: defaultView,
  initialState: {},
  middleware: [],
  welcome: '',
  title: ''
}

const cycleShell = (userUpdate, opts = {}) => {
  let {view, middleware, welcome, title} = {...defaultOpts, ...opts}

  var initState = {welcome, log: {}, user: {title: title}}
  const {subscribe, render} = vdux({
    reducer,
    initialState: initState,
    middleware: [flo(), handleSubmit(userUpdate), ...middleware]
  })
  ready(() => {
    subscribe((state) => {
      render(<App log={state.log} view={view} user={state.user} welcome={state.welcome} />)
    })
  })
}

module.exports = cycleShell
cycleShell.out = out
