import {createGame} from '../src/index'
import element from 'vdom-element'

const rooms = [
  {
    title: 'Dark cellar',
    status: 'asdfsd',
    paragraph: 'You awake in a dimly lit cellar'
  },
  {
    title: 'Kitchen',
    status: 'b2',
    paragraph: 'You proceeded to the kitchen'
  }
]

const initialState = {
  currentRoom: rooms[0]
}

function update (state, verb, noun) {
  let {verbs, nouns} = state.currentRoom
  if (verb === 'next') {
    state.currentRoom = rooms[1]
  }
  return state
}

function view (state) {
  let {currentRoom} = state
  let {title, paragraph} = currentRoom
  return {
    title: title,
    paragraph: paragraph
  }
}

var game = createGame(initialState, update, view)
game()
