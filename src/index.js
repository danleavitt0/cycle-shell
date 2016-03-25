import element from 'vdux/element'
import reducer from './reducer'
import vdux from 'vdux/dom'
import App from './app'
import reduce from '@f/reduce'
import multi from 'redux-multi'
import ready from 'domready'

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

module.exports = (userUpdate = () => {}, initialState = {}, view = defaultView) => {
  var initState = {log: [typeof (initialState) === 'string' && {output: initialState}], user: initialState}
  const {subscribe, render} = vdux({
    reducer: reducer(userUpdate),
    initialState: initState,
    middleware: [multi]
  })
  ready(() => {
    subscribe(state => {
      render(<App log={state.log} view={view} user={state.user} {...state} />)
    })
  })
}
