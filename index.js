function getRandomIndex() {
  return Math.floor(Math.random() * 3)
}

function computerPlay() {
  let hands = ['Rock', 'Paper', 'Scissors']
  let randomIndex = getRandomIndex()
  return hands[randomIndex]
}

// FUNCTION showOutcome(playerSelection, computerSelection):
//   if both the player and the computer select the same,
//   the outcome is 'DRAW'.
//
//   else, if player chooses Rock and the computer chooses Paper,
//   the outcome is 'You Lose! Paper beats Rock'
//
//   else, if player chooses Rock and the computer chooses Scissors,
//   the outcome is 'You Win! Rock beats Scissors'
//
//   else, if player chooses Paper and the computer chooses Rock,
//   the outcome is 'You Win! Paper beats Rock'
//
//   else, if player chooses Paper and the computer chooses Scissors,
//   the outcome is 'You Lose! Scissors beat Paper'
//
//   else, if player chooses Scissors and the computer chooses Rock,
//   the outcome is 'You Lose! Rock beats Scissors'
//
//   else, if player chooses Scissors and the computer chooses Paper,
//   the outcome is 'You Win! Scissors beats Paper'
//
//   return the outcome

function showOutcome(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    return "It's a Tie"
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You Lose! Paper beats Rock'
  }
}
