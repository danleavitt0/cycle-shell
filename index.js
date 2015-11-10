import createStore from './store'
import element from 'virtex-element'
import delegant from 'delegant'
import virtex from 'virtex'
import app from './app'

const store = createStore({position: 0, text: ['You are in a crowded forest']})
const {create, update} = virtex(store.dispatch)

let tree
let node
let pending = false
let rootNode = document.getElementById('app')

document.addEventListener('DOMContentLoaded', () => {
  store.subscribe(() => {
    if (pending) return
    pending = true
    setTimeout(rerender)
  })
  tree = app(store.getState())
  node = create(tree)
  rootNode.appendChild(node)
  delegant(rootNode, store.dispatch)
})

function rerender () {
  pending = false
  const newTree = app(store.getState())
  update(tree, newTree, node)
  tree = newTree
}
