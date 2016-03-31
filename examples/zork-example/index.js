var Zork = require('../../src')
Zork(update)

function rooms () {
  return {
    cellar: {
      name: 'cellar',
      description: 'You are in a dark cellar. The only thing you can see is a light switch on the wall next to you.',
      completed: false
    },
    kitchen: {
      name: 'kitchen',
      description: 'You are in a kitchen. In the middle of the table is a half prepared meal. The refrigerator is open and there appears to be no power in the house. There is a hallway to the east.',
      completed: true
    },
    hallway: {
      name: 'hallway',
      description: 'You move in to the hallway. There is at the end of the hallway that leads outside.'
    }
  }
}

function initialState () {
  return {
    title: 'Daniel\'s Zork',
    output: {
      name: 'Daniel',
      moreStuff: 'This is more stuff'
    },
    currentRoom: rooms().cellar,
    score: 0
  }
}

function update (state, verb, noun) {
  if (verb === 'look') {
    state.output = state.currentRoom.description
    return state
  }
  if (state.currentRoom.name === 'cellar') {
    if (verb === 'toggle') {
      if (noun === 'switch') {
        state.currentRoom.description = 'You are in the cellar. With the lights turned on you can see a closed door on the north side of the room. In the middle of the room is a large rug.'
        state.output = 'With the lights turned on you can see a closed door on the north side of the room. In the middle of the room is a large rug.'
      } else {
        state.output = 'I can not toggle that.'
      }
    } else if (verb === 'open') {
      if (noun === 'door') {
        if (state.currentRoom.completed === false) {
          state.output = 'The door is locked. You need to find a key before moving on.'
        } else {
          state.currentRoom = rooms.kitchen
          state.output = state.currentRoom.description
        }
      } else {
        state.output = 'I can\'t open that.'
      }
    } else if (verb === 'move') {
      if (noun === 'rug') {
        state.currentRoom.description = 'You are in the cellar. With the lights turned on you can see a closed door on the north side of the room. With the rug moved, you can see a key on the floor.'
        state.output = 'After sliding the rug out of the way you see a key on the ground. It looks like it could be used to open the door.'
      } else {
        state.output = 'I can\'t move that.'
      }
    } else if (verb === 'take') {
      if (noun === 'key') {
        state.currentRoom.completed = true
        state.currentRoom.description = 'You are in the cellar. With the lights turned on you can see a closed door on the north side of the room.'
        state.output = 'You have picked up the key.'
      } else {
        state.output = 'I can\'t pick that up.'
      }
    } else {
      state.output = 'Command not found'
    }
  } else if (state.currentRoom.name === 'kitchen') {
    if (verb === 'move') {
      state.currentRoom = rooms.hallway
      state.output = state.currentRoom.description
    } else {
      state.output = 'Command not found'
    }
  }
  return state
}
