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
console.log(getPlayerSelection());
console.log(getComputerSelection());
