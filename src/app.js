import merge from './utils/merge'
import element from 'virtex-element'
import Header from './components/header'
import Card from './components/card'
import _ from 'lodash'
import FeedUpdate from './components/feedUpdate'

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
  const {user, view, log} = props
  const fixedLog = _.clone(log).reverse()
  const {headerColor, headerTextColor} = user

  return (
    <div style={styles.app}>
      <Header
        title={user.title || 'Cycle'}
        score={user.score || 0}
        innerWidth='40%'
        style={merge({
          backgroundColor: headerColor,
          color: headerTextColor
        }, styles.header)}>
        <FeedUpdate/>
      </Header>
      <div>
        <div style={styles.feed}>
          {fixedLog.map((step, i) => {
            const output = view(step)
            if (output) {
              return (
                <Card
                  key={'item' + i}
                  action={step.action}
                  item={output}
                  color={step.color} />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default render
