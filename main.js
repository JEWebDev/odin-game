function getPlayerSelection() {
  let playerSelection = prompt("Choose Rock, Paper or Scissors");
  let election = validatePlayerSelection(playerSelection);
  return election;
}
function validatePlayerSelection(playerSelection) {
  let election = playerSelection.toLowerCase();
  if (election === "rock") {
    return election;
  } else if (election === "paper") {
    return election;
  } else if (election === "scissors") {
    return election;
  } else {
    getPlayerSelection();
  }
}
function getComputerSelection() {
  let choice = parseInt(Math.random() * (4 - 1) + 1);
  let computerSelection = "";

  if (choice === 1) {
    computerSelection = "rock";
  } else if (choice === 2) {
    computerSelection = "paper";
  } else if (choice === 3) {
    computerSelection = "scissors";
  }
  return computerSelection;
}
function playRound() {
  let playerSelection = getPlayerSelection();
  let computerSelection = getComputerSelection();
  return evaluateRound(playerSelection, computerSelection);
}
function evaluateRound(playerSelection, computerSelection) {
  if (playerSelection !== computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You loose! ${computerSelection} beats ${playerSelection}`;
    }
  } else {
    return "It's a draw!";
  }
}

console.log(playRound());
