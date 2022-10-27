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

let points = 0;
let gamesPlayed = 0;

function playRoshambo(userChoice) {
    const computerChoice = getComputerChoice();

    if (computerChoice === userChoice) {
        gamesPlayed++;
        return `Tie! You both chose ${userChoice}`;
    };

    if (userChoice === 'rock' && computerChoice === 'paper') {
        gamesPlayed++;
        return 'You lost! Paper beats rock';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        gamesPlayed++;
        points++;
        return 'You won! Rock beats scissors';
    };

    if (userChoice === 'paper' && computerChoice === 'rock') {
        gamesPlayed++;
        points++;
        return 'You won! Paper beats rock';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        gamesPlayed++;
        return 'You lost! Scissors beats paper';
    };

    if (userChoice === 'scissors' && computerChoice === 'rock') {
        gamesPlayed++;
        return 'You lost! Rock beats scissors';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        gamesPlayed++;
        points++;
        return 'You won! Scissors beats paper';
    };
}

const results = document.querySelector('#results');

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    results.textContent = playRoshambo('rock');
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    results.textContent = playRoshambo('paper');
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    results.textContent = playRoshambo('scissors');
});