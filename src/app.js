import merge from './utils/merge'
import element from 'virtex-element'
import Header from './components/header'
import Card from './components/card'
import FeedUpdate from './components/feedUpdate'
import _ from 'lodash'

const styles = {
  app: {
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh',
    height: '100%'
  },
  feed: {
    margin: '20px auto',
    width: '40%',
    minWidth: '600px'
  }
}

function render ({props}) {
  const {user, log, view} = props
  const fixedLog = _.clone(log).reverse()
  const {headerColor, headerTextColor} = user
  return (
    <div style={styles.app}>
      <Header
        key='header'
        title={user.title || 'Zork'}
        score={user.score || 0}
        innerWidth='40%'
        style={merge({
          backgroundColor: headerColor,
          color: headerTextColor
        }, styles.header)}>
        <FeedUpdate key='feed-update' />
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

export default {
  render
}
