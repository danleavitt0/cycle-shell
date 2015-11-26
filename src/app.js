import merge from './utils/merge'
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
    margin: '20px 30%',
    minWidth: '600px'
  },
  header: {
    padding: '0 30%',
    minWidth: '600px'
  }
}

function render ({log, view, key, state, user}, childState) {
  const fixedLog = _.clone(log).reverse()
  const {headerColor, headerTextColor} = user
  
  return (
    <div style={styles.app}>
      <Header
        key='header'
        title={user.title || 'Zork'}
        score={user.score || 0}
        style={merge({
          backgroundColor: headerColor,
          color: headerTextColor
        }, styles.header)}>
        <FeedUpdate key='feed-update' {...childState('feed-update')} />
      </Header>
      <div>
        <div style={styles.feed}>
          {fixedLog.map((step, i) => {
            const message = view(step)
            return (
              <Card
                key={'item' + i}
                action={step.action}
                item={message}
                color={step.color} />
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
