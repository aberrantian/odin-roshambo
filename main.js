/*
Randomly pick from "Rock", "Paper", or "Scissors"
Prompt user for their choice
Compare answers
Tell user if they won/lost/tied
Ask to play again
If yes
    play again
else
    end
*/

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock"
    }
    else if (choice === 1) {
        return "paper"
    }
    else if (choice === 2) {
        return "scissors"
    }
}

const computerChoice = getComputerChoice();
const userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

function playRoshambo() {
    if (computerChoice === userChoice) {
        return `Tie! You both chose ${userChoice}`;
    }

    if (computerChoice === "rock" && userChoice === "paper") {
        return "You win! Paper beats Rock!";
    } else {
        return "You lose! Rock beats Paper!";
    }

    if (computerChoice === "paper" && userChoice === "rock") {
        return "You lose! Paper beats Rock!";
    } else {
        return "You win! Scissors beats Paper!";
    }

    if (computerChoice === "scissors" && userChoice === "rock") {
        return "You win! Rock beats Scissors!";
    } else {
        return "You lose! Scissors beats Paper!";
    }
}

console.log(playRoshambo())