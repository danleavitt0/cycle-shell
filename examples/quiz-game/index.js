var Zork = require('../../src')
Zork(initialState(), update)

var questions = {
  one: {
    text: 'What is the price of an orange at Trader Joe\'s?',
    choices: '\na) $1.25 \nb) $0.89 \nc) $0.91 \nd) $10.00',
    correctAnswer: 'b',
    completed: false,
    next: 'two'
  },
  two: {
    text: 'What is the price of an apple at Trader Joe\'s?',
    choices: '\na) $1.25 \nb) $0.89 \nc) $0.91 \nd) $10.00',
    correctAnswer: 'a',
    completed: false
  }
}

function initialState () {
  return {
    name: 'Daniel',
    title: 'Quiz Game',
    currentQuestion: {completed: true, next: 'one'},
    message: `Type next to get started.`,
    headerColor: 'lightblue',
    headerTextColor: 'white',
    score: 0
  }
}

function update (state, verb, noun) {
  state.color = '#333'
  if (state.currentQuestion.correctAnswer === verb) {
    state.message = 'Correct! Type next to go to the next question.'
    state.color = 'lightgreen'
    state.currentQuestion.completed = true
    state.score += 5
  } else if (verb === 'next') {
    if (state.currentQuestion.completed) {
      state.currentQuestion = questions[state.currentQuestion.next]
      state.message = `${state.currentQuestion.text} \n${state.currentQuestion.choices}`
    } else {
      state.message = 'Complete the current question before moving on.'
    }
  } else {
    state.color = 'tomato'
    state.message = 'Nope.'
  }
  return state
}
