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
function evaluateSet(playerWins, computerWins) {
  console.log(`Player wins: ${playerWins}\nComputer wins: ${computer}`);
  if (playerWins > computerWins) {
    console.log("The player wins the set");
  } else {
    console.log("The computer wins the set");
  }
}

function game() {
  let playerWinsCount = 0;
  let computerWinsCount = 0;
  let result = "";
  for (let i = 0; i < 5; i++) {
    result = playRound();
    if (result.includes("win")) {
      playerWinsCount++;
      console.log(result);
    } else if (result.includes("loose")) {
      computerWinsCount++;
      console.log(result);
    } else {
      console.log(result);
      i--;
    }
  }
  evaluateSet(playerWinsCount, computerWinsCount);
}
game();
