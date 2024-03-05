let playerScore = 0;
let computerScore = 0;

let userMovePrompt = prompt("Let's play a game! Choose your weapon: rock, paper, or scissors. Best of 5!") .toLowerCase();

function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"]
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



// maybe include a return value inside the playRound function that provides a prompt? but then would the playGame function overrule it once 3 points are achieved?

function playGame() {
    } while (playerScore <3 && computerScore <3) {
        userMovePrompt = prompt("Let's play again!") .toLowerCase();
        console.log(playRound(userMovePrompt, computerSelection));
    } if (playerScore == 3) {
            alert("Congratulations, you won!");
    } else if (computerScore == 3) {
            alert("Sorry, you lost! Refresh the page to try again?");
}


/*
function winner() {
    if (playerScore = 3) {
        winner = prompt("Congratulations, you won!");
    } else if (computerScore = 3) {
        loser = prompt("Sorry, you lost! Try again?");
    }
}



/*
function playGame() {
    for (let i = 0; i <5; i++)
    while (playerScore <=3 || computerScore <=3) {
    prompt(userMovePrompt);
    }
}

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
*/






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