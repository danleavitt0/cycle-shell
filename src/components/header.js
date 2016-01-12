import element from 'virtex-element'
import merge from '../utils/merge'

function getStyles () {
  return {
    header: {
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      boxShadow: '0 0 5px 2px rgba(0,0,0,0.2)',
      color: '#333'
    },
    title: {
      fontSize: '20px'
    },
    children: {
      flex: 1
    },
    inner: {
      width: '80%',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      minWidth: '600px'
    }
  }
}

function render ({props, children}) {
  const {title, score, style, innerWidth} = props
  const styles = getStyles()
  return (
    <div style={merge(style, styles.header)}>
      <div style={merge({width: innerWidth}, styles.inner)}>
        <div style={styles.title}> {title && title} </div>
        <div style={styles.children}>
          {children && children.map(child => <div>{child}</div>)}
        </div>
        <div style={styles.score}> score: {score} </div>
      </div>
    </div>
  )
}

export default {
  render
}
