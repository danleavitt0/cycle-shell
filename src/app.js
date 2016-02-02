import merge from './utils/merge'
import element from 'virtex-element'
import Header from './components/header'
import Card from './components/card'
import _ from 'lodash'
import FeedUpdate from './components/feedUpdate'
import Log from './components/log'
import {initializeApp} from './actions'

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

function onCreate ({props}) {
  return initializeApp()
}

function render ({props}) {
  const {user, view, log} = props
  const {headerColor, headerTextColor} = user

  return (
    <div style={styles.app}>
      <Header
        title={user.title || 'Cycle'}
        score={user.score}
        innerWidth='40%'
        style={merge({
          backgroundColor: headerColor,
          color: headerTextColor
        }, styles.header)}>
        <FeedUpdate/>
      </Header>
      <Log data={log} view={view}/>
    </div>
  )
}

export default {
  onCreate,
  render
}
