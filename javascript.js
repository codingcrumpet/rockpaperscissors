let userMovePrompt = prompt("Let's play a game! Choose your weapon: rock, paper, or scissors.") .toLowerCase();

function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"]
    let opponentMove = moves[Math.floor(Math.random() * moves.length)];
    return opponentMove;
}

const playerSelection = userMovePrompt;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock"){
        alert("The computer chose rock. You tied!");
        playerScore += 1;
        computerScore += 1;
        } else if (playerSelection == "rock" && computerSelection == "paper"){
           alert("The computer chose paper. You lost!");
           computerScore += 1;
        } else if (playerSelection == "rock" && computerSelection == "scissors"){
           alert("The computer chose scissors. You won!");
           playerScore += 1;
        } else if (playerSelection == "scissors" && computerSelection == "scissors"){
            alert("The computer chose scissors. You tied!"); 
            playerScore += 1;
            computerScore += 1;
        } else if (playerSelection == "scissors" && computerSelection == "rock"){
            alert("The computer chose rock. You lost!"); 
            computerScore += 1;
        } else if (playerSelection == "scissors" && computerSelection == "paper"){
            alert("The computer chose paper. You won!"); 
            playerScore += 1;
        } else if (playerSelection == "paper" && computerSelection == "paper"){
            alert("The computer chose paper. You tied!");
            playerScore += 1;
            computerScore += 1; 
        } else if (playerSelection == "paper" && computerSelection == "scissors"){
            alert("The computer chose scissors. You lost!");
            computerScore += 1;
        } else if (playerSelection == "paper" && computerSelection == "rock")
            alert("The computer chose rock. You won!");
            playerScore += 1;  
}



const roundOver = playRound();

// create function where if alert includes "won" up playerscore by 1, if lose, up computerscore by 1, and add first to reach 3 score = overall winner alert






/*
function getComputerChoice() {
    let moves = ["rock", "paper", "scissors"]
    let opponentMove = Math.floor(Math.random() * moves.length);
    return opponentMove;

if (userMovePrompt == "rock") {
     alert("You chose rock");
    } else if (userMovePrompt == "paper") {
        alert("You chose paper");
    } else if (userMovePrompt == "scissors")
        alert("You chose scissors");





function playRound() {
    return getComputerChoice {
    };
    if 
}


*/