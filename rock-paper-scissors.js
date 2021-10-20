const computerSelection = function computerPlay () {
    const arrayRPS = [`rock`, `paper`, `scissors`];
    const randomElement = arrayRPS[Math.floor(Math.random() * arrayRPS.length)];
    return randomElement;
}

const playerSelection = function playerPlay () {
    let selection = prompt(`Please enter your selection`);
    return selection.toLowerCase();
}




function playRound(playerSelection, computerSelection) {
    let winner;
    console.log(`computer choice is ${computerSelection}`);
    console.log(`your choice is ${playerSelection}`);
    if (playerSelection === computerSelection) {
        console.log('EQUAL!');
    } else if (playerSelection == `rock` && computerSelection == `paper`) {
        console.log(`You lose!`);
        winner = `Computer`;
    } else if (playerSelection == `rock` && computerSelection == `scissors`) {
        console.log('You win!');
        winner = `You`;
    } else if (playerSelection == `paper` && computerSelection == `scissors`) {
        console.log('You lose!');
        winner = `Computer`;
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
        console.log('You win!');
        winner = `You`;
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
        console.log('You win!');
        winner = `You`;
    } else if (playerSelection == `scissors` && computerSelection == `rock`) {
        console.log('You lose!');
        winner = `Computer`;
    }
}

function game() {
    for(i = 1; i <= 5; i++) {
        console.log(`Round ${i}`);
        playRound(playerSelection(), computerSelection());
    }
}