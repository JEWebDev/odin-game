let playerScore = 0;
//#region modal window
// MODAL WINDOW
rulesBtn = document.querySelector(".rules-btn");
closeBtn = document.querySelector(".close-btn");

modalBg = document.querySelector(".modal");
modalContent = document.querySelector(".modal-content");
// EVENT LISTENERS
rulesBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
modalBg.addEventListener("click", closeModal);

// FUNCTIONS
function openModal() {
  modalBg.classList.remove("hidden");
  modalContent.classList.remove("hidden");
}
function closeModal() {
  modalBg.classList.add("hidden");
  modalContent.classList.add("hidden");
}
//#endregion

//#region choose section

const rules = [
  {
    choice: "rock",
    beats: "scissors",
  },
  {
    choice: "paper",
    beats: "rock",
  },
  {
    choice: "scissors",
    beats: "paper",
  },
];
function getPlayerSelection(e) {
  let choice = e.dataset.name;
  let playerChoice = rules.find((rule) => rule.choice === choice);
  return playerChoice;
}
function getComputerSelection() {
  const index = Math.floor(Math.random() * 3);
  return rules[index];
}
function initStepTwo() {
  const chooseSection = document.querySelector(".choose-section");
  const resultsSection = document.querySelector(".results-section");

  chooseSection.classList.toggle("hidden");
  resultsSection.classList.toggle("hidden");
}

//#endregion

//#region RESULTS
function displayChoices(player, computer) {
  const playerPlaceholder = document.querySelector(".player-placeholder");
  const computerPlaceholder = document.querySelector(".computer-placeholder");

  playerPlaceholder.innerHTML = `
  <div class="border ${player}">
    <div class= "option">
      <img src="../images/icon-${player}.svg" alt="${player}"/>
    </div>
  </div>
  `;
  setTimeout(() => {
    computerPlaceholder.innerHTML = `
    <div class="border ${computer}">
      <div class= "option">
        <img src="../images/icon-${computer}.svg" alt="${computer}"/>
      </div>
    </div>
    `;
  }, "1000");
}
function isWinner(results) {
  return results[0].beats === results[1].choice;
}

function defineWinner(playerSelection, computerSelection) {
  let resultsArray = [playerSelection, computerSelection];
  let playerWins = isWinner(resultsArray);
  let computerWins = isWinner(resultsArray.reverse());

  const resultsContainer = document.querySelector(".final-result");
  const resultText = document.querySelector(".result-text");
  const scoreText = document.querySelector(".score-value");
  const playAgainBtn = document.querySelector(".play-again-btn");

  playAgainBtn.addEventListener("click", playAgain);

  if (playerWins) {
    resultText.textContent = "YOU WIN";
    playerScore++;
    console.log(playerScore);
    setTimeout(() => {
      scoreText.textContent = playerScore;
    }, 1600);
  } else if (computerWins) {
    resultText.textContent = "YOU LOOSE";
    if (playerScore >= 1) {
      playerScore--;
    }
    setTimeout(() => {
      scoreText.textContent = playerScore;
    }, 1600);
  } else {
    resultText.textContent = "DRAW";
  }

  setTimeout(() => {
    resultsContainer.classList.toggle("hidden");
  }, 1300);
}
function evaluateRound(e) {
  let playerSelection = getPlayerSelection(e);
  let computerSelection = getComputerSelection();

  initStepTwo();
  displayChoices(playerSelection.choice, computerSelection.choice);
  defineWinner(playerSelection, computerSelection);
}
//#endregion

//#region Play Again
function resetPlaceholder() {
  const placeholder = document.querySelector(".computer-placeholder");
  placeholder.innerHTML = "";
}
function playAgain() {
  const chooseSection = document.querySelector(".choose-section");
  const resultsSection = document.querySelector(".results-section");
  const resultsContainer = document.querySelector(".final-result");
  resetPlaceholder();
  resultsContainer.classList.toggle("hidden");
  resultsSection.classList.toggle("hidden");
  chooseSection.classList.toggle("hidden");
}

//#endregion
