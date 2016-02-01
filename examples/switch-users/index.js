require('../../src')(main)
var hx = require('hypervdux')

const styles = {
  container: {
    color: 'lightblue',
    backgroundColor: 'lightyellow'
  }
}

function main (verb, noun) {
  return view(verb)
}

function view (message) {
  return hx`<div style=${styles.container}>${message}</div>`
}
