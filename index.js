function getRandomIndex() {
  return Math.floor(Math.random() * 3);
}

function getRandomHand() {
  const hands = ['Rock', 'Paper', 'Scissors'];
  return hands[getRandomIndex()];
}

function getClickSelection(buttonId) {
  if (buttonId === 'rock-button') return 'Rock';
  if (buttonId === 'paper-button') return 'Paper';
  if (buttonId === 'scissors-button') return 'Scissors';
}

function getWinner(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) return null;
  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  )
    return 'computer';
  return 'player';
}

function getRoundOutcome(playerSelection, computerSelection) {
  const loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
  const winMessage = `You Win! ${playerSelection} beats ${computerSelection}`;

  if (playerSelection === computerSelection) return "It's a Tie";
  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  )
    return loseMessage;
  return winMessage;
}

function changeHandSelection(selectionTag, handSelection) {
  const tag = document.querySelector(selectionTag);
  tag.textContent = handSelection;
}

function game() {
  console.log(`Round ${i + 1}`);

  playerSelection = prompt('Rock, Paper or Scissors?');
  computerSelection = getRandomHand();

  console.log(`Player: ${playerSelection}`);
  console.log(`Computer: ${computerSelection}`);

  roundOutcome = getRoundOutcome(playerSelection, computerSelection);
  console.log(roundOutcome);

  roundWinner = getWinner(playerSelection, computerSelection);
  if (roundWinner) {
    roundWinner === 'player' ? (playerScore += 1) : (computerScore += 1);
  }

  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log('You won the game!');
  } else {
    console.log('You lost the game.');
  }
}

const selectionButtons = document.querySelectorAll('.hand-button');
const playerSelectionTag = document.querySelector('#player-selection');
const computerSelectionTag = document.querySelector('#computer-selection');

selectionButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const computerSelection = getRandomHand();
    const clickedButtonId = e.target.id;
    const playerSelection = getClickSelection(clickedButtonId);
    const roundOutcome = getRoundOutcome(playerSelection, computerSelection);
    playerSelectionTag.textContent = playerSelection;
    computerSelectionTag.textContent = computerSelection;
    console.log(roundOutcome);
  });
});
