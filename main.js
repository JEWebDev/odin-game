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
getPlayerSelection();
