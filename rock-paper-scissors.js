//game logic
const btnsContainer = document.querySelector(".buttons-container");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const resultRound = document.querySelector(".result");
const resultRoundStyle = resultRound.style;

let playerSelection;

const computerSelection = function computerPlay() {
  const arrayRPS = [`rock`, `paper`, `scissors`];
  const randomElement = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
  return randomElement;
};

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
  let winner;

  console.log(`Computer choice is ${computerSelection}`);
  console.log(`Your choice is ${playerSelection}`);

  if (playerSelection === computerSelection) {
    resultRound.textContent = "EQUAL";
    resultRoundStyle.color = "blue";
  } else if (playerSelection == `rock` && computerSelection == `paper`) {
    resultRound.textContent = "PC wins this round!";
    resultRoundStyle.color = "red";
    winner = `Computer`;
  } else if (playerSelection == `rock` && computerSelection == `scissors`) {
    resultRound.textContent = "You win this round!";
    resultRoundStyle.color = "green";
    winner = `You`;
  } else if (playerSelection == `paper` && computerSelection == `scissors`) {
    resultRound.textContent = "PC wins this round!";
    resultRoundStyle.color = "red";
    winner = `Computer`;
  } else if (playerSelection == `paper` && computerSelection == `rock`) {
    resultRound.textContent = "You win this round!";
    resultRoundStyle.color = "green";
    winner = `You`;
  } else if (playerSelection == `scissors` && computerSelection == `paper`) {
    resultRound.textContent = "You win this round!";
    resultRoundStyle.color = "green";
    winner = `You`;
  } else if (playerSelection == `scissors` && computerSelection == `rock`) {
    resultRound.textContent = "PC wins this round!";
    resultRoundStyle.color = "red";
    winner = `Computer`;
  }
  return winner;
}

// function game() {
//   let winner;
//   let playerScore = 0;
//   let computerScore = 0;

//   for (i = 1; i <= 5; i++) {
//     console.log(`Round ${i}`);
//     winner = playRound(playerSelection, computerSelection());
//     if (winner == `You`) {
//       playerScore = playerScore + 1;
//     } else if (winner == `Computer`) {
//       computerScore = computerScore + 1;
//     }
//     console.log(`your score is ${playerScore}`);
//     console.log(`computer score is ${computerScore}`);
//   }

//   if (playerScore > computerScore) {
//     console.log(`You win the game`);
//   } else if (playerScore < computerScore) {
//     console.log(`You lose the game`);
//   } else {
//     console.log("Casualities");
//   }
// }
