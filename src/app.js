import _ from 'lodash'
import element from 'vdom-element'
import localize from 'vdux-local'
import Header from './components/header'
import Card from './components/card'
import FeedUpdate from './components/feedUpdate'

const styles = {
  app: {
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    height: '100%'
  },
  feed: {
    margin: '20px 30%'
  },
  header: {
    padding: '0 30%'
  }
}

function render ({log, view, key, state, user}, childState) {
  let fixedLog = _.clone(log).reverse()
  return (
    <div style={styles.app}>
      <Header
        key='header'
        title={user.title || 'Zork'}
        score={user.score || 0}
        style={styles.header}>
        <FeedUpdate key='feed-update' {...childState('feed-update')} />
      </Header>
      <div>
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
}

export default localize({
  render
})
