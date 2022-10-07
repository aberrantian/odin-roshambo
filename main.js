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

