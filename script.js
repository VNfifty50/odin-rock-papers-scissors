

function getComputerChoice () {
    let arr = ["Rock", "Papers", "Scissors"];
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

const btn = document.querySelector("#btn");
const rock = document.querySelector("#rock");
const papers = document.querySelector("#papers");
const scissors = document.querySelector("#scissors");

// Start the game logic when the header button is clicked
btn.addEventListener("click", () => {
    alert("The game just started!");
    startGame();
})

function playerOption() {
    let playerSelection = "";

    rock.addEventListener("click", () => {
        playerSelection = "rock";
    })
    papers.addEventListener("click", () => {
        playerSelection = "papers";
    })
    scissors.addEventListener("click", () => {
        playerSelection = "scissors";
    })

    if (playerSelection != "") {
        return playerSelection;
    }
}

function playerRound(playerSelection, computerSelection) {
    let winner = "";
    if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock")    ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            winner =  playerSelection;
    } else if (playerSelection === computerSelection) {
        winner = "It's a tie!"
    } else {
        winner = computerSelection;
    }
    return winner;
}


function startGame() {
    let playerPoints = 0;
    let computerPoints = 0;
    let counter = 0; //breakpoint to end the loop after a certain number
    let body = document.querySelector("body");

    // LOOP RUNS FOREVER NEEDS A FIX

    // the rounds only stop when one of the players get 5 points
    while (playerPoints != 5 || computerPoints != 5 || counter > 2) {
        let winnerElement = document.createElement("div");
        let playerSelection = "";
        if (playerSelection != "") {
            alert("Choose an option!")
        }
        playerSelection = playerOption();
        let computerSelection = getComputerChoice();
        
        let winner = playerRound(playerSelection, computerSelection);
        
        // alter the dom tree and introduce an element calling the winner..
        // sum the round points to each counter
        if (playerSelection != "") {
            if (winner === playerSelection) {
                winnerElement.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
                playerPoints++;
            } else if (winner === computerSelection) {
                winnerElement.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
                computerPoints++;
            } else {
                winnerElement.textContent = "It's a tie";
            }

            body.appendChild(winnerElement);
        }
    }
    counter++;
    // Alter the dom tree again to announce the player who got most points
    if (playerPoints === 5) {
        alert("you are the champion");
    } else if (computerPoints === 5) {
        alert("computer always wins")
    }


}
