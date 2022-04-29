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
    return 'none'
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

function playRound(playerSelection, computerSelection) {
  // Returns the outcome based on the player and computer selections.
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    return "It's a Tie"
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You Lose! Paper beats Rock'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You Lose! Scissors beat Paper'
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You Lose! Rock beats Scissors'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You Win! Rock beats Scissors'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You Win! Paper beats Rock'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You Win! Scissors beat Paper'
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

    roundOutcome = playRound(playerSelection, computerSelection)
    console.log(roundOutcome)

    roundWinner = getWinner(playerSelection, computerSelection)
    if (roundWinner == 'player') {
      playerScore += 1
    } else if (roundWinner == 'computer') {
      computerScore += 1
    }

    console.log(`Player score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`)

    if (i === 4) {
      if (playerScore > computerScore) {
        console.log('You won the game!')
      } else {
        console.log('You lost the game.')
      }
    }
  }
}

game()
