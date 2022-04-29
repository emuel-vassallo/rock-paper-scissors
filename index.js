function getRandomIndex() {
  return Math.floor(Math.random() * 3)
}

function getRandomHand() {
  // Returns a random hand selection.
  let hands = ['Rock', 'Paper', 'Scissors']
  return hands[getRandomIndex()]
}

function getWinner(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    return null
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    return 'computer'
  } else {
    return 'player'
  }
}

function getRoundOutcome(playerSelection, computerSelection) {
  // Returns the outcome based on the selections of the player and computer.
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  let loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`
  let winMessage = `You Win! ${playerSelection} beats ${computerSelection}`

  switch (playerSelection) {
    case computerSelection:
      return "It's a Tie"
    case 'rock':
      switch (computerSelection) {
        case 'paper':
          return loseMessage
        case 'scissors':
          return winMessage
      }
      break
    case 'paper':
      switch (computerSelection) {
        case 'rock':
          return winMessage
        case 'scissors':
          return loseMessage
      }
      break
    case 'scissors':
      switch (computerSelection) {
        case 'rock':
          return loseMessage
        case 'paper':
          return winMessage
      }
      break
  }
}

function game() {
  let playerScore = 0
  let computerScore = 0

  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}`)

    playerSelection = prompt('Rock, Paper or Scissors?')
    computerSelection = getRandomHand()

    console.log(`Player: ${playerSelection}`)
    console.log(`Computer: ${computerSelection}`)

    roundOutcome = getRoundOutcome(playerSelection, computerSelection)
    console.log(roundOutcome)

    roundWinner = getWinner(playerSelection, computerSelection)
    if (roundWinner) {
      roundWinner === 'player' ? (playerScore += 1) : (computerScore += 1)
    }

    console.log(`Player score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`)

    switch (i) {
      case 4:
        playerScore > computerScore
          ? console.log('You won the game!')
          : console.log('You lost the game.')
    }
  }
}

game()
