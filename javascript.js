function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"]
    let opponentMove = moves[Math.floor(Math.random() * moves.length)];
    console.log(opponentMove);
}


/*
function getComputerChoice() {
    let moves = ["rock", "paper", "scissors"]
    let opponentMove = Math.floor(Math.random() * moves.length);
    return opponentMove;
*/