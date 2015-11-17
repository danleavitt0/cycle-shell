import element from 'vdom-element'
import localize from 'vdux-local'

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
    }
  }
}

function render (props, childState) {
  let styles = getStyles()
  let {action} = props
  return (
    <div style={styles.container}>
      {action && <div style={styles.action}> > {action} </div>}
      <div style={styles.paragraph}>{props.item}</div>
    </div>
  )
}

export default localize({
  render
})
