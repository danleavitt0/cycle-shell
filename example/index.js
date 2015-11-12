import {createGame} from '../src/index'
import element from 'virtex-element'

const initialState = {
  currentRoom: {
    title: 'Stuff'
  }
}

function update (state, noun, verb) {
  state.currentRoom = {
    title: noun
  }
  return state
}

function view (state) {
  return (
    <div> {state.currentRoom.title} </div>
  )
}

var game = createGame(initialState, update, view)
game()
