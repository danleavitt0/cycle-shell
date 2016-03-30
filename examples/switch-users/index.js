require('../../src')(main, reset())
var maxTries = 10
var tries = 0
var password = 'orange juice'
var score = 1000
var hint1 = 'it\'s a beverage'
var hint2 = 'not a soda'
var hint3 = 'made from fruit'
var hint4 = 'people drink this at breakfast'
var secret = 'I have 3 older sisters.'
var gameOver = false

function reset () {
  maxTries = 10
  tries = 0
  score = 1000
  gameOver = false
  return `Try out my guessing game.
You have ${maxTries} tries.`
}

function main (guess) {
  if (!gameOver) {
    return guessWord(guess)
  } else {
    if (guess === 'start') {
      return reset()
    } else {
      return `Type start to try again`
    }
  }
}

function guessWord (guess) {
    tries = tries + 1
    if (playerHasGuessesLeft()) {
      if (checkGuess(guess)) {
        return renderPlayerWins()
      } else {
        return renderGuessedWrong()
      }
    } else {
        return renderPlayerLoses()
    }
}

// return true if the player has any guesses left
// otherwise return false
function playerHasGuessesLeft () {
    if (tries < maxTries) {
        return true
    } else {
        return false
    }
}

function checkGuess (guess) {
    if (guess === password) {
        return true
    } else {
        return false
    }
}

function renderPlayerWins () {
    score = 10000 / tries
    gameOver = true
    return `
You got it right!
My secret is: ${secret}
${renderScore()}
${renderGrade()}`
}

function renderGuessedWrong () {
    score = score - 100
    return `
You got it wrong!
You have used ${tries} out of your ${maxTries} guesses!
${renderHint()}
${renderScore()}`
}

function renderHint () {
    if (tries === 1) {
        return `Here's a hint: ${hint1}`
    } else if (tries === 2) {
        return `Here's a hint: ${hint2}`
    } else if (tries === 3) {
        return `Here's a hint: ${hint3}`
    } else if (tries === 4) {
        return `Here's a hint: ${hint4}`
    } else {
        return `No more hints!`
    }
}
// maxTries = 10
// 1, 2, 3: A
// 4, 5, 6: B
// 7, 8, 9: C
// 10+: F
// Your Grade: B
function renderGrade () {
    if (tries <= 3) {
        return 'Your grade: A'
    } else if (tries <= 6) {
        return 'Your grade: B'
    } else if (tries <= 9) {
        return 'Your grade: C'
    } else {
        return 'Your grade: F'
    }
}

function renderScore () {
    return `Your score: ${Math.round(score)}`
}

function renderPlayerLoses () {
    // You ran out of guesses. You lose!
    gameOver = true
    return `
You ran out of guesses you lose
Well you earned it: ${secret}
My word was ${password}
${renderScore()}
    `
}

// For multiple rounds... (untested)
// var keepPlaying = "yes"

// while (keepPlaying == "yes" || keepPlaying == "Yes") {
//     resetGame()
//     while (gameOver == false) {
//         var guess = prompt("Try to guess my word!")
//         guessWord(guess)
//     }
//     keepPlaying = prompt("Do you want to play again?")
// }

// function resetGame() {
//     score = 1000
//     tries = 0
//     gameOver = false
// }
