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
    status: {

    },
    paragraph: {

    }
  }
}

function render (props, childState) {
  let styles = getStyles()
  let {title, status, paragraph} = props.item
  return (
    <div style={styles.container}>
      <div style={styles.title}>{title}</div>
      <div style={styles.status}>{status}</div>
      <div style={styles.paragraph}>{paragraph}</div>
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
