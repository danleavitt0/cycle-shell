import element from 'vdux/element' // eslint-disable-line no-unused-vars

import merge from './utils/merge'
import Header from './components/header'
import FeedUpdate from './components/feedUpdate'
import Log from './components/log'

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
  const {welcome, user, view, log} = props
  const {headerColor, headerTextColor} = user

  return (
    <div class='app' style={styles.app}>
      <Header
        title={user.title || 'Cycle'}
        innerWidth='40%'
        style={merge({
          backgroundColor: headerColor,
          color: headerTextColor
        }, styles.header)}>
        <FeedUpdate/>
      </Header>
      <Log log={log} view={view} welcome={welcome}/>
    </div>
  )
}

export default {
  render
}
