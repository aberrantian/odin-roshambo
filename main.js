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

function playRoshambo(userChoice) {
    const computerChoice = getComputerChoice();

    if (computerChoice === userChoice) {
        return `Tie! You both chose ${userChoice}`;
    }

    
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    console.log(playRoshambo('rock'));
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    console.log(playRoshambo('paper'));
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    console.log(playRoshambo('scissors'));
});