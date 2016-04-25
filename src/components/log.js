import element from 'vdux/element' // eslint-disable-line no-unused-vars

import Card from './card'

const styles = {
  feed: {
    margin: '20px auto',
    width: '40%',
    minWidth: '600px'
  }
}

function render ({props}) {
  let {log, view, welcome} = props
  const fixedLog = Object.keys(log).reverse()
  return (
    <div>
      <div style={styles.feed}>
        {fixedLog.map((key, i) => {
          var process = log[key]
          if (process) {
            return (
              <Card
                key={'item' + i}
                action={process.action}
                item={process.output.map(view)}
                color={process.color} />
            )
          }
        })}
        {welcome && <Card
          key={0}
          item={view(welcome)} />
        }
      </div>
    </div>
  )
}

export default render
