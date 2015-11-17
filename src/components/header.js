import element from 'vdom-element'
import localize, {localAction} from 'vdux-local'

const getStyles = () => {
  return {
    header: {
      height: '64px',
      padding: '0 20%',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white',
      boxShadow: '0 0 5px 2px rgba(0,0,0,0.2)',
      color: '#333'
    },
    title: {
      fontSize: '26px'
    },
    inner: {
      flex: 1
    }
  }
}

function render (props, childState) {
  let styles = getStyles()
  let {title, score, children} = props
  return (
    <div style={styles.header}>
      <div style={styles.title}> {title && title} </div>
      <div style={styles.inner}>
        {children && children.map(child => <div>{child}</div>)}
      </div>
      <div style={styles.score}> score: {score} </div>
    </div>
  )
}

function reducer (state, action) {
  switch (action.type) {

  }
  return state
}

export default localize({
  render,
  reducer
})
