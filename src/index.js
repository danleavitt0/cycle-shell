import element from 'vdux/element'
import reducer from './reducer'
import vdux from 'vdux/dom'
import App from './app'
import reduce from '@f/reduce'
import ready from 'domready'
import logger from 'redux-logger'
import flo from 'redux-flo'
import handleSubmit from './middleware/handleSubmit'

const defaultView = output => {
  if (typeof (output) !== 'object' || output.props) {
    return output
  } else {
    return reduce((arr, item, key) => {
      arr.push(`${key}: ${item}`)
      return arr
    }, [], output).join('\n')
  }
}

module.exports = (userUpdate = () => {}, welcome = '', initialState = {}, view = defaultView) => {
  var initState = {welcome, log: {}, user: initialState}
  const {subscribe, render} = vdux({
    reducer,
    initialState: initState,
    middleware: [logger(), flo(), handleSubmit(userUpdate)]
  })
  ready(() => {
    subscribe(state => {
      render(<App log={state.log} view={view} user={state.user} welcome={state.welcome} />)
    })
  })
}
