function getRandomIndex() {
  return Math.floor(Math.random() * 3)
}

function computerPlay() {
  let hands = ['Rock', 'Paper', 'Scissors']
  let randomIndex = getRandomIndex()
  return hands[randomIndex]
}

function getWinner(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    return 'tie'
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
    computerSelection = computerPlay()

    console.log(`Player: ${playerSelection}`)
    console.log(`Computer: ${computerSelection}`)

    roundWinner = getWinner(playerSelection, computerSelection)
    console.log(`Round winner: ${roundWinner}`)

    if (roundWinner == 'player') {
      playerScore += 1
    } else {
      computerScore += 1
    }

    console.log(`Player score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`)

    playRound(playerSelection, computerSelection)
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
