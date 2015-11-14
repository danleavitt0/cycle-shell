import _ from 'lodash'
import element from 'vdom-element'
import localize, {localAction} from 'vdux-local'
import Header from './components/header'
import FeedItem from './components/feedItem'
import FeedUpdate from './components/feedUpdate'

const styles = {
  app: {
    fontFamily: 'Roboto, sans-serif'
  },
  container: {
    width: '80%',
    margin: '20px auto',
    boxShadow: '0 0 2px 2px rgba(255,99,71, 0.1)',
    borderRadius: '10px'
  },
  feed: {

  }
}

function render ({log, view, key, state, score}, childState) {
  let {text} = state
  let fixedLog = _.clone(log).reverse()
  return (
    <div style={styles.app}>
      <Header
        key='header'
        title='Zork'
        score={score || 0} />
      <div style={styles.container}>
        <FeedUpdate key='feed-update' {...childState('feed-update')} />
        <div style={styles.feed}>
          {fixedLog.map((step, i) => {
            let parts = view(step)
            return (
              <FeedItem key={'item' + i} item={parts} />
            )
          })}
        </div>
      </div>
    </div>
  )

  function handleSubmit (e) {
    const text = e.target.value.trim()
    const parts = text.split(' ')
    const noun = parts[1] ? parts[1] : ''
    return text && e.which === ENTER_KEY
      ? [setText(key, ''), submit(parts[0], noun)]
      : setText(key, text)
  }
}

export default localize({
  render
})
