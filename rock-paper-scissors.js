//game logic

const computerSelection = function computerPlay() {
  const arrayRPS = [`rock`, `paper`, `scissors`];
  const randomElement = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
  return randomElement;
};

let playerSelection;

// const playerSelection = function playerPlay() {
//   let selection = prompt(`Please enter your selection`);
//   return selection.toLowerCase();
// };

function playRound(playerSelection, computerSelection) {
  let winner;

  console.log(`Computer choice is ${computerSelection}`);
  console.log(`Your choice is ${playerSelection}`);

  if (playerSelection === computerSelection) {
    console.log("EQUAL!");
  } else if (playerSelection == `rock` && computerSelection == `paper`) {
    console.log(`You lose this round!`);
    winner = `Computer`;
  } else if (playerSelection == `rock` && computerSelection == `scissors`) {
    console.log("You win this round!");
    winner = `You`;
  } else if (playerSelection == `paper` && computerSelection == `scissors`) {
    console.log("You lose this round!");
    winner = `Computer`;
  } else if (playerSelection == `paper` && computerSelection == `rock`) {
    console.log("You win this round!");
    winner = `You`;
  } else if (playerSelection == `scissors` && computerSelection == `paper`) {
    console.log("You win this round!");
    winner = `You`;
  } else if (playerSelection == `scissors` && computerSelection == `rock`) {
    console.log("You lose this round!");
    winner = `Computer`;
  }
  return winner;
}

function game() {
  let winner;
  let playerScore = 0;
  let computerScore = 0;

  for (i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    winner = playRound(playerSelection(), computerSelection());
    if (winner == `You`) {
      playerScore = playerScore + 1;
    } else if (winner == `Computer`) {
      computerScore = computerScore + 1;
    }
    console.log(`your score is ${playerScore}`);
    console.log(`computer score is ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log(`You win the game`);
  } else if (playerScore < computerScore) {
    console.log(`You lose the game`);
  } else {
    console.log("Casualities");
  }
}

// added UI design
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  playerSelection = rockBtn.id;
});

paperBtn.addEventListener("click", () => {
  playerSelection = paperBtn.id;
});

scissorsBtn.addEventListener("click", () => {
  playerSelection = scissorsBtn.id;
});

console.log(playerSelection);
console.log(computerSelection());
