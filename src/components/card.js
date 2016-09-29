import element from 'vdux-smaller/element' // eslint-disable-line no-unused-vars

import isArray from '@f/is-array'

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
  const {action, item} = props
  const styles = getStyles()
  return (
    <div class='card' style={styles.container}>
      {action && <div style={styles.action}> > {action} </div>}
      <div style={styles.paragraph}>
        {isArray(item) ? item.map((child) => <div>{child}</div>) : item}
      </div>
    </div>
  )
}

export default {
  render
}
