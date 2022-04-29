function getRandomIndex() {
  return Math.floor(Math.random() * 3)
}

function computerPlay() {
  let hands = ['Rock', 'Paper', 'Scissors']
  let randomIndex = getRandomIndex()
  return hands[randomIndex]
}

function playRound(playerSelection, computerSelection) {
  if (winner === 'rock') {
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

//FUNCTION game:
// create variable for player score;
// create variable for computer score;

// create variable for player selection;
// create variable for computer selection;
// begin for loop that stops the fifth time:
// get player selection and store it in the variable;
// get computer selection and store it in the variable;
// use the playRound function to get the winner or loser and store it in new variable;
// print the winner or loser variable;
