// DOM Elements
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const playerChoiceElement = document.getElementById("player-choice");
const computerChoiceElement = document.getElementById("computer-choice");
const resultMessageElement = document.getElementById("result-message");
const resetButton = document.getElementById("reset-btn");

// Game state
let playerScore = 0;
let computerScore = 0;
let isGameActive = true;

// Game buttons
const gameButtons = document.querySelectorAll(".game-btn");

// Choice icons mapping
const choiceIcons = {
  rock: "fa-hand-rock",
  paper: "fa-hand-paper",
  scissors: "fa-hand-scissors",
};

// Initialize game
function initGame() {
  playerScore = 0;
  computerScore = 0;
  isGameActive = true;
  updateScore();
  resetChoices();
  resultMessageElement.textContent = "Choose your weapon!";
}

// Reset choices display
function resetChoices() {
  playerChoiceElement.innerHTML = "";
  computerChoiceElement.innerHTML = "";
}

// Update score display
function updateScore() {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

// Get computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Display choice
function displayChoice(choice, element) {
  element.innerHTML = `<i class="fas ${choiceIcons[choice]}"></i>`;
}

// Play round
function playRound(playerChoice, computerChoice) {
  // Display choices with animation
  displayChoice(playerChoice, playerChoiceElement);
  displayChoice(computerChoice, computerChoiceElement);

  // Add shake animation
  playerChoiceElement.classList.add("shake");
  computerChoiceElement.classList.add("shake");

  // Remove shake animation after delay
  setTimeout(() => {
    playerChoiceElement.classList.remove("shake");
    computerChoiceElement.classList.remove("shake");
  }, 500);

  // Determine winner
  if (playerChoice === computerChoice) {
    return "draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

// Update game state
function updateGameState(result) {
  if (!isGameActive) return;

  let message = "";
  switch (result) {
    case "player":
      playerScore++;
      message = "You win! 🎉";
      break;
    case "computer":
      computerScore++;
      message = "Computer wins! 😢";
      break;
    case "draw":
      message = "It's a draw! 🤝";
      break;
  }

  updateScore();
  resultMessageElement.textContent = message;

  // Check for game end
  if (playerScore === 5 || computerScore === 5) {
    isGameActive = false;
    const winner = playerScore > computerScore ? "You" : "Computer";
    setTimeout(() => {
      resultMessageElement.textContent = `${winner} won the game! 🏆`;
    }, 1000);
  }
}

// Handle player choice
function handlePlayerChoice(choice) {
  if (!isGameActive) return;

  const computerChoice = getComputerChoice();
  const result = playRound(choice, computerChoice);
  updateGameState(result);
}

// Event Listeners
gameButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const choice = button.dataset.choice;
    handlePlayerChoice(choice);
  });
});

resetButton.addEventListener("click", initGame);

// Initialize game on load
initGame();
