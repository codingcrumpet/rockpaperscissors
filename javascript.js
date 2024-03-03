let userMovePrompt = prompt("Let's play a game! Choose your weapon: rock, paper, or scissors.") .toLowerCase();
    if (userMovePrompt == "rock") {
        console.log("You chose rock");
    } else if (userMovePrompt == "paper") {
        console.log("You chose paper");
    } else if (userMovePrompt == "scissors")
        console.log("You chose scissors");

function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"]
    let opponentMove = moves[Math.floor(Math.random() * moves.length)];
    return opponentMove;
}







/*
function getComputerChoice() {
    let moves = ["rock", "paper", "scissors"]
    let opponentMove = Math.floor(Math.random() * moves.length);
    return opponentMove;



function playRound() {
    return getComputerChoice {
    };
    if 
}


*/