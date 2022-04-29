function getRandomIndex() {
  return Math.floor(Math.random() * 3)
}

function computerPlay() {
  let hands = ['Rock', 'Paper', 'Scissors']
  let randomIndex = getRandomIndex()
  return hands[randomIndex]
}

function playRound(winner) {
  if (winner === 'rock') return "It's a Tie"
  return 'You Lose! Paper beats Rock'
  return 'You Lose! Scissors beat Paper'
  return 'You Lose! Rock beats Scissors'
  return 'You Win! Rock beats Scissors'
  return 'You Win! Paper beats Rock'
  return 'You Win! Scissors beat Paper'
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
