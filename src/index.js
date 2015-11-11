import createStore from './store'
import element from 'virtex-element'
import delegant from 'delegant'
import virtex from 'virtex'
import app from './app'

export default (newUpdate = () => {}, view = () => {}, initialState = {text: 'Forest'}) => {
  const store = createStore(initialState)
  const {create, update} = virtex(store.dispatch)

  let tree
  let node
  let pending = false

  if (document.readyState === 'complete' || document.readyState === 'loaded') {
    setup()
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      setup()
    })
  }

  function setup () {
    let rootNode = document.body
    store.subscribe(() => {
      if (pending) return
      pending = true
      setTimeout(rerender)
    })
    tree = app(store.getState())
    node = create(tree)
    rootNode.appendChild(node)
    delegant(rootNode, store.dispatch)
  }

  function rerender () {
    pending = false
    const newTree = app(newUpdate())
    update(tree, newTree, node)
    tree = newTree
  }
}
