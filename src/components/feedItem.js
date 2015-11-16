import element from 'vdom-element'
import localize, {localAction} from 'vdux-local'

const getStyles = () => {
  return {
    container: {
      borderBottom: '1px solid rgba(255,99,71, 0.2)',
      padding: '15px'
    },
    title: {
      fontSize: '18px',
      margin: '5px 0',
      fontWeight: 'bold'
    },
    action: {
      marginBottom: '5px',
      fontStyle: 'italic'
    }
  }
}

function render (props, childState) {
  let styles = getStyles()
  // let {title, status, paragraph, response} = props.item
  let {action} = props
  return (
    <div style={styles.container}>
      {action && <div style={styles.action}> > {action} </div>}
      <div style={styles.paragraph}>{props.item}</div>
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
