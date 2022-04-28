function getRandomIndex() {
  return Math.floor(Math.random() * 3)
}

function computerPlay() {
  let hands = ['Rock', 'Paper', 'Scissors']
  let randomIndex = getRandomIndex()
  return hands[randomIndex]
}

function showOutcome(playerSelection, computerSelection) {
  let playerSelection = playerSelection.toLowerCase()
  let computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    return "It's a Tie"
  }
}
