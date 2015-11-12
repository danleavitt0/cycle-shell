import createStore from './store'
import element from 'virtex-element'
import delegant from 'delegant'
import virtex from 'virtex'
import app from './app'

export default (initialState, userUpdate = () => {}, view = () => {}) => {
  const store = createStore({log: [], user: initialState}, userUpdate)
  const {create, update} = virtex(store.dispatch)

  let tree
  let node
  let pending = false

  function start () {
    let rootNode = document.body
    store.subscribe(() => {
      if (pending) return
      pending = true
      setTimeout(rerender)
    })
    tree = app({...store.getState(), view: view})
    node = create(tree)
    rootNode.appendChild(node)
    delegant(rootNode, store.dispatch)
  }

  function rerender () {
    pending = false
    const newTree = app({...store.getState(), view: view})
    update(tree, newTree, node)
    tree = newTree
  }

  return start
}
