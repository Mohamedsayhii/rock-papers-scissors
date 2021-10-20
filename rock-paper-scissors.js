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
    console.log(`computer choice is ${computerSelection}`);
    console.log(`your choice is ${playerSelection}`);
    if (playerSelection === computerSelection) {
        console.log('EQUAL!');
    } else if (playerSelection == `rock` && computerSelection == `paper`) {
        console.log(`You lose!`);
    } else if (playerSelection == `rock` && computerSelection == `scissors`) {
        console.log('You win!');
    } else if (playerSelection == `paper` && computerSelection == `scissors`) {
        console.log('You lose!');
    } else if (playerSelection == `paper` && computerSelection == `rock`) {
        console.log('You win!');
    } else if (playerSelection == `scissors` && computerSelection == `paper`) {
        console.log('You win!');
    } else if (playerSelection == `scissors` && computerSelection == `rock`) {
        console.log('You lose!');
    }
}

