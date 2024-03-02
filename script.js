
let champElement = document.createElement("div");

let playerPoints = 0;
let computerPoints = 0; 

let btn = document.querySelector("#btn");
let rock = document.querySelector("#rock");
let papers = document.querySelector("#papers");
let scissors = document.querySelector("#scissors");

let resultElement = document.querySelector(".result");
let winnerElement = document.createElement("div");
winnerElement.textContent = "";
champElement.textContent = "";

winnerElement.style.display = "flex";
winnerElement.style.justifyContent = "center";
winnerElement.style.margin = "20px";
winnerElement.style.fontSize = "30px";

champElement.style.display = "flex";
champElement.style.justifyContent = "center";
champElement.style.margin = "20px";
champElement.style.fontSize = "30px";
champElement.style.color = "green";

resultElement.appendChild(winnerElement);
resultElement.appendChild(champElement);

let body = document.querySelector("body");
body.appendChild(winnerElement);
body.appendChild(champElement);

// Start the game logic when the header button is clicked

btn.addEventListener("click", () => {
    alert("The game just started!");
    
    winnerElement.textContent = "";
    champElement.textContent = "";
    playerPoints = 0;
    computerPoints = 0;

    startGame();
});


function startGame() {                              
    let playerSelection = "";
    let winner = "";
        
    rock.addEventListener("click", () => {
      
        playerSelection = "rock";

        let computerSelection = getComputerChoice();

        winner = playerRound(playerSelection, computerSelection);
        console.log(winner);
        if (winner === playerSelection) {
            playerPoints++;
        } else if (winner === computerSelection) {
            computerPoints++;
        }
        
        getResult(winner, playerSelection, playerPoints, computerPoints);    
    });
        
    papers.addEventListener("click", () => {


        playerSelection = "papers";
        
        let computerSelection = getComputerChoice();

        winner = playerRound(playerSelection, computerSelection);
        
        if (winner === playerSelection) {
            playerPoints++;
        } else if (winner === computerSelection) {
            computerPoints++;
        }
        
        getResult(winner, playerSelection, playerPoints, computerPoints);
    });
        
    scissors.addEventListener("click", () => {

        playerSelection = "scissors";
        
        let computerSelection = getComputerChoice();

        winner = playerRound(playerSelection, computerSelection);

        if (winner === playerSelection) {
            playerPoints++;
        } else if (winner === computerSelection) {
            computerPoints++;
        }

        getResult(winner, playerSelection, playerPoints, computerPoints);

    });

    function getComputerChoice () {
        let arr = ["rock", "papers", "scissors"];
        const random = Math.floor(Math.random() * arr.length);
        return arr[random];
    }
    
    function playerRound(playerSelection, computerSelection) {
        let winner = "";
    
        
        if (playerSelection == "rock" && computerSelection == "scissors") {
            winner = playerSelection;
        }

        if (playerSelection == "papers" && computerSelection == "rock") {
            winner = playerSelection;
        }

        if (playerSelection == "scissors" && computerSelection == "papers") {
            winner = playerSelection;
        }

        if (computerSelection == "rock" && playerSelection == "scissors") {
            winner = computerSelection;
        }

        if (computerSelection == "papers" && playerSelection == "rock") {
            winner = computerSelection;
        }

        if (computerSelection == "scissors" && playerSelection == "papers") {
            winner = computerSelection;
        }

        if (computerSelection == playerSelection) {
            return "tie";
        }

        return winner;
    };
    
    function getResult(winner, playerSelection, playerPoints, computerPoints) {
        let computerSelection = getComputerChoice();
    
        if (playerSelection != "") {
            if (winner === playerSelection) {
                winnerElement.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
            } else if (winner === computerSelection) {
                console.log("loss");
                winnerElement.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
            } else {
                console.log("tie");
                winnerElement.textContent = "It's a tie";
            }
    
        }

        if (playerPoints == 5) {
            champElement.textContent = `You are the champion!`;
            playerPoints = 0;
            computerPoints = 0; 
            champElement.style.color = "green";
        } else if (computerPoints == 5) {
            champElement.style.color = "red";
            champElement.textContent = `Computer is the champion!`;
            playerPoints = 0;
            computerPoints = 0;
        }
    };

        
};

