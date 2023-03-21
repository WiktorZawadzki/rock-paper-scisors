function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        };
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock"){
    return "You Tie!";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
    return "You Lose!";
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
    return "You Win!";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
    return "You Win!";
    } else if (playerSelection == "paper" && computerSelection == "paper"){
    return "You Tie!";
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
    return "You lose!";
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
    return "You lose!";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
    return "You win!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors"){
    return "You Tie!";};
}

const playerSelection = prompt("Choose");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game(playerSelection, computerSelection){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());