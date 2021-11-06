//game logic
const btnsContainer = document.querySelector(".buttons-container");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const resultRound = document.querySelector(".result");
const resultRoundStyle = resultRound.style;

const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");

const playerChoice = document.querySelector("#player-choice");
const playerChoiceStyle = playerChoice.style;
const computerChoice = document.querySelector("#computer-choice");
const computerChoiceStyle = computerChoice.style;

const roundNumber = document.querySelector(".round-number");

const computerSelection = function computerPlay() {
  const arrayRPS = [`rock`, `paper`, `scissors`];
  const randomElement = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
  return randomElement;
};
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let i;

rockBtn.addEventListener("click", (e) => {
  playerSelection = e.target.id;
  playRound(playerSelection, computerSelection());
});

paperBtn.addEventListener("click", (e) => {
  playerSelection = e.target.id;
  playRound(playerSelection, computerSelection());
});

scissorsBtn.addEventListener("click", (e) => {
  playerSelection = e.target.id;
  playRound(playerSelection, computerSelection());
});

function playRound(playerSelection, computerSelection) {
  computerChoice.textContent = `${computerSelection}`;
  playerChoice.textContent = `${playerSelection}`;

  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;

  if (playerScore < 5 && computerScore < 5) {
    if (playerSelection === computerSelection) {
      resultRound.textContent = "EQUAL";
      resultRoundStyle.color = "blue";
    } else if (playerSelection == `rock` && computerSelection == `paper`) {
      resultRound.textContent = "PC wins this round!";
      resultRoundStyle.color = "red";

      computerScore++;
    } else if (playerSelection == `rock` && computerSelection == `scissors`) {
      resultRound.textContent = "You win this round!";
      resultRoundStyle.color = "green";
      playerScore++;
    } else if (playerSelection == `paper` && computerSelection == `scissors`) {
      resultRound.textContent = "PC wins this round!";
      resultRoundStyle.color = "red";
      computerScore++;
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
      resultRound.textContent = "You win this round!";
      resultRoundStyle.color = "green";
      playerScore++;
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
      resultRound.textContent = "You win this round!";
      resultRoundStyle.color = "green";
      playerScore++;
    } else if (playerSelection == `scissors` && computerSelection == `rock`) {
      resultRound.textContent = "PC wins this round!";
      resultRoundStyle.color = "red";
      computerScore++;
    }
  } else {
    if (playerScore > computerScore) {
      resultRound.textContent = "AHCHIIIIIH, bara rawah";
      resultRoundStyle.color = "green";
    } else {
      resultRound.textContent = "Te7chelk";
      resultRoundStyle.color = "red";
    }
  }
}

// function game(play) {
//   let winner = play();
//   if (winner === `you`) {
//     playerScore++;
//   } else if (winner === `computer`) {
//     computerScore++;
//   }
//   computerScoreSpan.textContent = `${computerScore}`;
//   playerScoreSpan.textContent = `${playerScore}`;

// if (playerScore > computerScore) {
//   console.log(`You win the game`);
// } else if (playerScore < computerScore) {
//   console.log(`You lose the game`);
// } else {
//   console.log("Casualities");
// }
// }
