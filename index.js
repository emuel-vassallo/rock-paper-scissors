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
  if (playerSelection === computerSelection) return null;
  if (
    (playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')
  )
    return 'computer';
  return 'player';
}

function getRoundOutcome(playerSelection, computerSelection) {
  const loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`;
  const winMessage = `You Win! ${playerSelection} beats ${computerSelection}`;

  if (playerSelection === computerSelection) return "It's a Tie";
  if (
    (playerSelection === 'Rock' && computerSelection === 'Paper') ||
    (playerSelection === 'Paper' && computerSelection === 'Scissors') ||
    (playerSelection === 'Scissors' && computerSelection === 'Rock')
  )
    return loseMessage;

  return winMessage;
}

function changeHandSelection(selectionTag, handSelection) {
  const tag = document.querySelector(selectionTag);
  tag.textContent = handSelection;
}

function game() {
  const roundNumberTag = document.querySelector('#round-number');
  const selectionButtons = document.querySelectorAll('.hand-button');
  const playerSelectionTag = document.querySelector('#player-selection');
  const computerSelectionTag = document.querySelector('#computer-selection');
  const playerScoreTag = document.querySelector('#player-score');
  const computerScoreTag = document.querySelector('#computer-score');
  const roundOutcomeTag = document.querySelector('#round-outcome');
  const gameOutcomeTag = document.querySelector('#game-outcome');
  const playAgainButton = document.querySelector('#play-again');

  let roundNumber = 0;
  let playerScore = 0;
  let computerScore = 0;

  function resetGame() {
    selectionButtons.forEach((button) => {
      button.disabled = false;
    });
    playerScore = 0;
    computerScore = 0;
    roundNumber = 0;
    roundNumberTag.textContent = 0;
    playerScoreTag.textContent = 0;
    computerScoreTag.textContent = 0;
    roundOutcomeTag.textContent = '';
    gameOutcomeTag.textContent = '';
    playerSelectionTag.textContent = '';
    computerSelectionTag.textContent = '';
    playAgainButton.classList.add('hidden');
  }

  selectionButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      roundNumber++;
      roundNumberTag.textContent = roundNumber;

      const clickedButtonId = e.target.id;

      const computerSelection = getRandomHand();
      const playerSelection = getClickSelection(clickedButtonId);

      const roundOutcome = getRoundOutcome(playerSelection, computerSelection);

      playerSelectionTag.textContent = playerSelection;
      computerSelectionTag.textContent = computerSelection;

      roundOutcomeTag.textContent = roundOutcome;

      roundWinner = getWinner(playerSelection, computerSelection);
      if (roundWinner) {
        if (roundWinner === 'player') playerScore++;
        else computerScore++;
      }
      playerScoreTag.textContent = playerScore;
      computerScoreTag.textContent = computerScore;

      if (playerScore === 5 || computerScore === 5) {
        if (playerScore < computerScore)
          gameOutcomeTag.textContent = 'You lost this game!';
        else gameOutcomeTag.textContent = 'You won this game!';
        playAgainButton.classList.remove('hidden');
        selectionButtons.forEach((button) => {
          button.disabled = true;
        });
      }
    });
  });

  playAgainButton.addEventListener('click', () => {
    resetGame();
  });
}

game();
