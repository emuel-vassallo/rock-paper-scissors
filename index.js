function getRandomIndex() {
  return Math.floor(Math.random() * 3)
}

function computerPlay() {
  let hands = ['Rock', 'Paper', 'Scissors']
  let randomIndex = getRandomIndex()
  return hands[randomIndex]
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
