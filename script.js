let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll('button');

const result = document.querySelector('.result');

buttons.forEach(button => button.addEventListener('click', () => {
    if(playerWins == 5 || computerWins == 5) {
        return;
    }
    playRound(button);
}));

function playRound(e) {
    let computerSelection = getComputerChoice();
    let playerSelection = e.classList.value;
    const computerChoice = document.querySelector('.computer-choice');
    const playerChoice = document.querySelector('.player-choice');
    computerChoice.textContent = computerSelection;
    playerChoice.textContent = playerSelection;
    const winner = getWinner(computerSelection, playerSelection);
    const displayPlayerScore = document.querySelector('.player-score');
    const displayComputerScore  = document.querySelector('.computer-score');
    if(winner === "player") {
        playerWins++;
        displayPlayerScore.textContent = playerWins;
    }
    else if(winner === "computer") {
        computerWins++;
        displayComputerScore.textContent = computerWins;
    }
    else if(winner === "tie") {
        playerWins++;
        displayPlayerScore.textContent = playerWins;
        computerWins++;
        displayComputerScore.textContent = computerWins;
    }
    else {
        console.log("Unknown ERROR");
        result.textContent = "Unknown ERROR";
    }
    if(playerWins == 5 && computerWins == 5) {
        result.textContent = "Oops! It's a Tie.";
        return;
    }
    if(playerWins == 5) {
        result.textContent = "Congrats! You Won!";
        return;
    } 
    if(computerWins == 5) {
        result.textContent = "Ooh! You Lost";
        return;
    }
}

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3)+1;
    if(randomNumber === 1) {
        return "rock";
    }
    else if(randomNumber === 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function getWinner(a, b) {
    if(a === "rock") {
        if(b === "paper") {
            return "player";
        }
        if(b === "scissor") {
            return "computer";
        }
        return "tie";
    }
    if(a === "paper") {
        if(b === "rock") {
            return "computer";
        }
        if(b === "scissor") {
            return "player";
        }
        return "tie";
    }
    if(a === "scissor") {
        if(b === "rock") {
            return "player";
        }
        if(b == "paper") {
            return "computer";
        }
        return "tie";
    }
}


