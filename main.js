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

let gamesWon = 0;

function playRoshambo() {
    const computerChoice = getComputerChoice();
    const userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

    if (computerChoice === userChoice) {
        return `Tie! You both chose ${userChoice}`;
    }

    if (computerChoice === "rock" && userChoice === "paper") {
        gamesWon += 1;
        return "You win! Paper beats Rock!";
    } else {
        return "You lose! Rock beats Paper!";
    }

    if (computerChoice === "paper" && userChoice === "rock") {
        return "You lose! Paper beats Rock!";
    } else {
        gamesWon += 1;
        return "You win! Scissors beats Paper!";
    }

    if (computerChoice === "scissors" && userChoice === "rock") {
        gamesWon += 1;
        return "You win! Rock beats Scissors!";
    } else {
        return "You lose! Scissors beats Paper!";
    }
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', playRoshambo);

const paper = document.querySelector('#paper');
rock.addEventListener('click', playRoshambo);

const scissors = document.querySelector('#scissors');
rock.addEventListener('click', playRoshambo);