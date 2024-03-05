let playerScore = 0;
let computerScore = 0;

let userMovePrompt = prompt("Let's play a game! Choose your weapon: rock, paper, or scissors. Best of 5!") .toLowerCase();

function getComputerChoice() {
    let moves = ["rock", "paper", "scissors"]
    let opponentMove = moves[Math.floor(Math.random() * moves.length)];
    return opponentMove;
}

let playerSelection = userMovePrompt;
let computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock"){
        alert("The computer chose rock. You tied!");
        } else if (playerSelection == "rock" && computerSelection == "paper"){
           alert("The computer chose paper. You lost!");
           computerScore ++;
        } else if (playerSelection == "rock" && computerSelection == "scissors"){
           alert("The computer chose scissors. You won!");
           playerScore ++;
        } else if (playerSelection == "scissors" && computerSelection == "scissors"){
            alert("The computer chose scissors. You tied!");
        } else if (playerSelection == "scissors" && computerSelection == "rock"){
            alert("The computer chose rock. You lost!"); 
            computerScore ++;
        } else if (playerSelection == "scissors" && computerSelection == "paper"){
            alert("The computer chose paper. You won!"); 
            playerScore ++;
        } else if (playerSelection == "paper" && computerSelection == "paper"){
            alert("The computer chose paper. You tied!");
        } else if (playerSelection == "paper" && computerSelection == "scissors"){
            alert("The computer chose scissors. You lost!");
            computerScore ++;
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            alert("The computer chose rock. You won!");
            playerScore ++;
        }
}

function playGame() {
    } while (playerScore <3 && computerScore <3) {
        userMovePrompt = prompt("Let's play again!") .toLowerCase();
        computerSelection = getComputerChoice();
        console.log(playRound(userMovePrompt, computerSelection));
    } if (playerScore == 3) {
            alert("Congratulations, you won!");
    } else if (computerScore == 3) {
            alert("Sorry, you lost! Refresh the page to try again?");
}