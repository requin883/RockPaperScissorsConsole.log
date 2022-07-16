//Variables

let ComputerCounter = 0;
let playerCounter = 0;
let totalGames = 0;

//DOM Items

//Queries

const container = document.querySelector(".btn-group")
const btns = document.querySelectorAll("button");
const winnerDiv = document.querySelector('.result-container');
const startGame = document.querySelector("#start-new");

// Elements

const gamesRemain = document.createElement("h4");
const winnerTxt = document.createElement('h3');
const winnerScore = document.createElement("h1");
winnerDiv.appendChild(winnerScore);
winnerDiv.appendChild(winnerTxt);
container.appendChild(gamesRemain);

//Event Listeners 
startGame.addEventListener('click', (e) => {
    winnerScore.textContent = "";
    winnerTxt.textContent = "";
    btns.forEach(button => button.classList.remove("no-show"));
    startGame.classList.add("no-show");
})
btns.forEach(button =>
    button.addEventListener('click', (e) => e.target.id == "start-new" ? "" : playGame(e.target["id"])));

//Functions

function showRemainingGames(totalGames) {
    if (totalGames == 5) {
        gamesRemain.textContent = " ";
    } else {
        gamesRemain.textContent = `You have ${5 - totalGames} plays left`;
    }
}

function computerPlay() {
    let computerMove = Math.floor(Math.random() * 3) + 1;
    return computerMove == 1 ? "rock" : computerMove == 2 ? "paper" : "scissors";
}
function scoreboard(Pcounter, CCounter) {
    winnerScore.textContent = `Player: ${Pcounter} vs Computer: ${CCounter}`;
}
function endGame(Pcounter, CCounter) {
    const winner = Pcounter > CCounter ? `Player wins the whole match with ${Pcounter} games` : `Computer wins the whole match with ${CCounter} games`;
    winnerTxt.textContent = "";
    winnerScore.textContent = winner;
    ComputerCounter = 0; playerCounter = 0; totalGames = 0;
    btns.forEach(button => button.classList.add("no-show"))
    startGame.classList.remove("no-show");
}
function playGame(userMove) {
    let computerMove = computerPlay();
    let gameWinner = `Player played ${userMove} and Computer played ${computerMove} and `;
    switch (true) {
        case (computerMove == userMove):
            winnerTxt.textContent = "This is a Draw!";
            totalGames++;
            showRemainingGames(totalGames);
            break;
        case ((computerMove == "rock" && userMove == "paper") ||
            (computerMove == "scissors" && userMove == "rock") ||
            (computerMove == "paper" && userMove == "scissors")):
            winnerTxt.textContent = `${gameWinner} "Player wins!"`;
            playerCounter++;
            totalGames++;
            scoreboard(playerCounter, ComputerCounter);
            showRemainingGames(totalGames);
            break;
        case ((userMove == "rock" && computerMove == "paper") ||
            (userMove == "scissors" && computerMove == "rock") ||
            (userMove == "paper" && computerMove == "scissors")):
            winnerTxt.textContent = `${gameWinner} "Computer wins!"`;
            ComputerCounter++;
            totalGames++;
            scoreboard(playerCounter, ComputerCounter);
            showRemainingGames(totalGames);
            break;
        default:
            winnerTxt.textContent = "Try again with a valid option";
            break;
    }
    if (totalGames == 5) {
        endGame(playerCounter, ComputerCounter);
    }
}
