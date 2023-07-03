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

function playRound(computerChoice, playerChoice) {
    console.log("computerChoice: " + computerChoice);
    console.log("playerChoice: " + playerChoice);
    const winner = getWinner(computerChoice, playerChoice);
    return winner;
}

function displayWon() {
    console.log("Congrats! You won.");
}

function displayLost() {
    console.log("Ooh! You LOST");
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

function getPlayerChoice() {
    const playerChoice = prompt("Enter your choice!", "");
    return playerChoice;
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for(let i=0 ; i<5 ; i++) {
        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();
        const winner = playRound(computerChoice, playerChoice);
        if(winner === "computer") {
            computerWins++;
        }
        else if(winner === "player") {
            playerWins++;
        }
        console.log("computerWins: " + computerWins);
        console.log("playerWins: " + playerWins);
    }
    if(playerWins < computerWins) {
        displayLost();
    }
    else {
        displayWon();
    }
    const x = confirm("Do you want to try again?");
    if(x) {
        game();
    }
}

game();
