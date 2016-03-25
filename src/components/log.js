import element from 'vdux/element'
import Card from './card'

const styles = {
  feed: {
    margin: '20px auto',
    width: '40%',
    minWidth: '600px'
  }
}

function render ({props}) {
  let {data, view} = props
  const fixedLog = [...data].reverse()
  return (
    <div>
      <div style={styles.feed}>
        {fixedLog.map((step, i) => {
          let {output} = step
          if (output) {
            return (
              <Card
                key={'item' + i}
                action={step.action}
                item={view(output)}
                color={step.color} />
            )
          }
        })}
      </div>
    </div>
  )
}

export default render
