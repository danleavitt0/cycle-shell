import element from 'virtex-element'
import merge from '../utils/merge'

const getStyles = () => {
  return {
    container: {
      padding: '20px 25px',
      backgroundColor: 'white',
      boxShadow: '0 0 5px 0 rgba(0,0,0,0.2)',
      marginBottom: '10px'
    },
    title: {
      fontSize: '18px',
      margin: '5px 0',
      fontWeight: 'bold'
    },
    action: {
      marginBottom: '5px',
      fontStyle: 'italic'
    },
    paragraph: {
      whiteSpace: 'pre-wrap'
    }
  }
}

function render ({props}) {
  const {action, item, color} = props
  const styles = getStyles()
  return (
    <div style={styles.container}>
      {action && <div style={styles.action}> > {action} </div>}
      <div style={styles.paragraph}>
        {item}
      </div>
    </div>
  )
}

export default {
  render
}
