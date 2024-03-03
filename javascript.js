let userMovePrompt = prompt("Let's play a game! Choose your weapon: rock, paper, or scissors.") .toLowerCase();

function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"]
    let opponentMove = moves[Math.floor(Math.random() * moves.length)];
    return opponentMove;
}

const playerSelection = userMovePrompt;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock"){
        alert("The computer chose rock. You tied!");
        } else if (playerSelection == "rock" && computerSelection == "paper"){
           alert("The computer chose paper. You lost!");
        } else if (playerSelection == "rock" && computerSelection == "scissors"){
           alert("The computer chose scissors. You won!");
        } else if (playerSelection == "scissors" && computerSelection == "scissors"){
            alert("The computer chose scissors. You tied!");
        } else if (playerSelection == "scissors" && computerSelection == "rock"){
            alert("The computer chose rock. You lost!");
        } else if (playerSelection == "scissors" && computerSelection == "paper"){
            alert("The computer chose paper. You won!") 
        } else if (playerSelection == "paper" && computerSelection == "paper"){
            alert("The computer chose paper. You tied!")  
        } else if (playerSelection == "paper" && computerSelection == "scissors"){
            alert("The computer chose scissors. You lost!")  
        } else if (playerSelection == "paper" && computerSelection == "rock")
            alert("The computer chose rock. You won!")   
}








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


/*
Step 1: Prompt shows up providing options to player
Step 2: Prompt input activates computer choice
Step 3: Activation of computer choice compares (maybe using boolean) computer choice to player choice
Step 4: Comparison of player choices leads to win, tie, or loss for player/computer
Step 5: Result is then returned to user via alert
Step 6: new prompt shows up, providing chance to play again.

--> Thoughts; between step 5/6, might need a button? which requires html
*/