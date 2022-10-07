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
        return "Rock"
    }
    else if (choice === 1) {
        return "Paper"
    }
    else if (choice === 2) {
        return "Scissors"
    }
}

const computerChoice = getComputerChoice().toLocaleLowerCase();
const userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
