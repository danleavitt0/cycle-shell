var Zork = require('../../src').createGame

var questions = [
  {
    text: 'What is the price of an orange at Trader Joe\'s?',
    choices: '\na) $1.25 \nb) $0.89 \nc) $0.91 \nd) $10.00',
    correctAnswer: 'b',
    completed: false,
    number: 1
  },
  {
    text: 'What is the price of an apple at Trader Joe\'s?',
    choices: '\na) $1.25 \nb) $0.89 \nc) $0.91 \nd) $10.00',
    correctAnswer: 'a',
    completed: false,
    number: 2
  }
]

var initialState = {
  name: 'Daniel',
  title: 'Quiz Game',
  currentQuestion: {completed: true, number: 0},
  message: `Type next to get started.`,
  score: 0
}

function update (state, verb, noun) {
  if (state.currentQuestion.correctAnswer === verb) {
    state.message = 'Correct! Type next to go to the next question.'
    state.currentQuestion.completed = true
    state.score += 5
  } else if (verb === 'next') {
    if (state.currentQuestion.completed) {
      state.currentQuestion = questions[state.currentQuestion.number++]
      state.message = `${state.currentQuestion.text} \n${state.currentQuestion.choices}`
    } else {
      state.message = 'Complete the current question before moving on.'
    }
  } else {
    state.message = 'Nope.'
  }
  return state
}

var game = Zork(initialState, update)
game()
