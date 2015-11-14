import element from 'vdom-element'
import localize, {localAction} from 'vdux-local'

const getStyles = () => {
  return {
    header: {
      height: '64px',
      padding: '0 10%',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'tomato',
      boxShadow: '0 0 5px 2px rgba(0,0,0,0.2)',
      color: '#ffffff'
    },
    title: {
      fontSize: '26px',
      flex: '1'
    }
  }
}

function render (props, childState) {
  let styles = getStyles()
  let {title, score} = props
  return (
    <div style={styles.header}>
      <div style={styles.title}> {title && title} </div>
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
