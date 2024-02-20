function getComputerChoice () {
    let arr = ["Rock", "Papers", "Scissors"];
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

const btn = document.querySelector("#btn");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
    playGame();
})

function playerRound(playerSelection, computerSelection) {
    let winner = "";
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock")    ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            return playerSelection;
    } else if (playerSelection === computerSelection) {
        return "It's a tie!"
    } 
    return computerSelection;
}

function playGame() {
    let counter = 5;
    let userAnswer = "";
    let userPoints = 0;
    let computerPoints = 0;
    while (counter > 0) {
        userAnswer = prompt("Rock, paper or scissors?").toLowerCase();
        let computerAnswer = getComputerChoice();

        let winner = playerRound(userAnswer, computerAnswer);
        
        if (userAnswer == winner) {
            userPoints++;
            alert(`You win! ${userAnswer} beats ${computerAnswer}`);
        } else if (computerAnswer == winner) {
            computerPoints++;
            alert(`You lose! ${computerAnswer} beats ${userAnswer}`);
        } else {
            alert("It's a tie!");
        }
        counter--;
    }
    
    if (userPoints > computerPoints) {
        if (userPoints > 1) {
            alert(`You are the winner with ${userPoints} points`);
        } else {
            alert(`You are the winner with ${userPoints} point`);
        }
        
    } else if (computerPoints > userPoints) {
        if (computerPoints > 1) {
            alert(`Computer is the winner with ${computerPoints} points`);
        } else {
            alert(`Computer is the winner with ${computerPoints} point`);
        }
    }
}