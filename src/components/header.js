import element from 'vdom-element'
import localize from 'vdux-local'
import _ from 'lodash'
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
    inner: {
      flex: 1
    }
  }
}

function render ({title, score, children, style}, childState) {
  const styles = getStyles()
  console.log(style)
  return (
    <div style={merge(style, styles.header)}>
      <div style={styles.title}> {title && title} </div>
      <div style={styles.inner}>
        {children && children.map(child => <div>{child}</div>)}
      </div>
      <div style={styles.score}> score: {score} </div>
    </div>
  )
}

export default localize({
  render
})
