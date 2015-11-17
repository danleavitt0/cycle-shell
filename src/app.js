import _ from 'lodash'
import element from 'vdom-element'
import localize, {localAction} from 'vdux-local'
import Header from './components/header'
import Card from './components/card'
import FeedUpdate from './components/feedUpdate'

const styles = {
  app: {
    fontFamily: 'Roboto, sans-serif'
  },
  container: {
    width: '50%',
    margin: '20px auto'
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
        score={score || 0}>
        <FeedUpdate key='feed-update' {...childState('feed-update')} />
      </Header>
      <div style={styles.container}>
        <div style={styles.feed}>
          {fixedLog.map((step, i) => {
            let message = view(step)
            return (
              <Card
                key={'item' + i}
                action={step.action}
                item={message} />
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
