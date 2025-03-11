let humanChoice;
let choices = document.getElementById("choices");
let winner = document.getElementById("winner");
let humanScore = 0;
let computerScore = 0;

const btn_1 = document.querySelector("#btn-1");
const btn_2 = document.querySelector("#btn-2");
const btn_3 = document.querySelector("#btn-3");

function getComputerChoice() {
  let CompChoice = Math.random();
  if (CompChoice < 0.33) {
    return "ROCK";
  } else if (CompChoice >= 0.33 && CompChoice < 0.66) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function getHumanChoice(humanChoice) {
  if (humanChoice == 1) {
    return "ROCK";
  } else if (humanChoice == 2) {
    return "PAPER";
  } else if (humanChoice == 3) {
    return "SCISSORS";
  } else {
    return "Start and choose between 1 and 3";
  }
}

function playRound(humanChoice, CompChoice) {
  if (humanChoice == CompChoice) {
    choices.innerHTML =
      "Your choice: " + humanChoice + ", Computer choice: " + CompChoice;
    return "It's a draw";
  } else if (humanChoice == "ROCK" && CompChoice == "PAPER") {
    choices.innerHTML =
      "Your choice: " + humanChoice + ", Computer choice: " + CompChoice;
    return "Computer wins";
  } else if (humanChoice == "PAPER" && CompChoice == "ROCK") {
    choices.innerHTML =
      "Your choice: " + humanChoice + ", Computer choice: " + CompChoice;
    return "Human wins";
  } else if (humanChoice == "ROCK" && CompChoice == "SCISSORS") {
    choices.innerHTML =
      "Your choice: " + humanChoice + ", Computer choice: " + CompChoice;
    return "Human wins";
  } else if (humanChoice == "SCISSORS" && CompChoice == "ROCK") {
    choices.innerHTML =
      "Your choice: " + humanChoice + ", Computer choice: " + CompChoice;
    return "Computer wins";
  } else if (humanChoice == "SCISSORS" && CompChoice == "PAPER") {
    choices.innerHTML =
      "Your choice: " + humanChoice + ", Computer choice: " + CompChoice;
    return "Human wins";
  } else if (humanChoice == "PAPER" && CompChoice == "SCISSORS") {
    choices.innerHTML =
      "Your choice: " + humanChoice + ", Computer choice: " + CompChoice;
    return "Computer wins";
  }
}

btn_1.addEventListener("click", () => {
  humanChoice = 1;
  playGame();
});

btn_2.addEventListener("click", () => {
  humanChoice = 2;
  playGame();
});

btn_3.addEventListener("click", () => {
  humanChoice = 3;
  playGame();
});

function playGame() {
  let CompGuess = getComputerChoice();
  let humanGuess = getHumanChoice(humanChoice);
  let result = playRound(humanGuess, CompGuess);

  if (result == "Computer wins") {
    computerScore += 1;
  } else if (result == "Human wins") {
    humanScore += 1;
  }

  winner.innerHTML =
    "Human Score: " + humanScore + " Computer Score: " + computerScore;

  if (computerScore > humanScore) {
    console.log("Computer wins");
  } else {
    console.log("You win");
  }
}
