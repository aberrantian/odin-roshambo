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

let userPoints = 0;
let computerPoints = 0;
let roundsPlayed = 0;

const runningScore = document.querySelector('#running-score');

function resetRunningScore() {
    if (userPoints >= 3 || computerPoints >= 3 || roundsPlayed == 5) {
        userPoints = 0;
        computerPoints = 0;
        roundsPlayed = 0;        
    }
}

function updateRunningScore() {
    if (userPoints >= 3) {
        runningScore.innerHTML = `
            Round ${roundsPlayed}/5<br>
            Your points: ${userPoints}<br>
            Computer points: ${computerPoints}<br>
            You WON best of 5`;
    } else if (computerPoints >= 3) {
        runningScore.innerHTML = `
            Round ${roundsPlayed}/5<br>
            Your points: ${userPoints}<br>
            Computer points: ${computerPoints}<br>
            You LOST best of 5`;
    } else {
        runningScore.innerHTML = `
            Round ${roundsPlayed}/5<br>
            Your points: ${userPoints}<br>
            Computer points: ${computerPoints}<br>`;
    };
    
    resetRunningScore();
};

function playRoshambo(userChoice) {
    const computerChoice = getComputerChoice();

    if (computerChoice === userChoice) {
        roundsPlayed++;
        updateRunningScore();
        return `Tie! You both chose ${userChoice}`;
    };

    if (userChoice === 'rock' && computerChoice === 'paper') {
        roundsPlayed++;
        computerPoints++;
        updateRunningScore();
        return 'You lost! Paper beats rock';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        roundsPlayed++;
        userPoints++;
        updateRunningScore();
        return 'You won! Rock beats scissors';
    };

    if (userChoice === 'paper' && computerChoice === 'rock') {
        roundsPlayed++;
        userPoints++;
        updateRunningScore();
        return 'You won! Paper beats rock';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        roundsPlayed++;
        computerPoints++;
        updateRunningScore();
        return 'You lost! Scissors beats paper';
    };

    if (userChoice === 'scissors' && computerChoice === 'rock') {
        roundsPlayed++;
        computerPoints++;
        updateRunningScore();
        return 'You lost! Rock beats scissors';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        roundsPlayed++;
        userPoints++;
        updateRunningScore();
        return 'You won! Scissors beats paper';
    };
};

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