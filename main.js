//DOM Items
const container = document.querySelector(".btn-group")
const btns = document.querySelectorAll("button");
const winnerEl = document.createElement('h3');
container.appendChild(winnerEl);

btns.forEach(button=>button.addEventListener('click',(e)=> playGame(e.target["id"])));


function computerPlay(){
        let computerMove = Math.floor(Math.random()*3)+1;
        return computerMove == 1 ? "rock" : computerMove == 2 ? "paper" : "scissors";
}
function playGame(userMove){
    let ComputerCounter = 0;
    let playerCounter = 0;
    let totalGames = 0;
        let computerMove = computerPlay();
        let gameWinner = `Player played ${userMove} and Computer played ${computerMove} and `;
        switch(true){
            case (computerMove == userMove):
                winnerEl.textContent=  "This is a Draw!";
                totalGames++;
                break;
            case ((computerMove == "rock" && userMove == "paper") || 
            (computerMove == "scissors" && userMove == "rock") ||
            (computerMove == "paper" && userMove == "scissors")):
                winnerEl.textContent= `${gameWinner} "Player wins!"`;
                playerCounter++;
                totalGames++;
                break;
                case ((userMove == "rock" && computerMove == "paper") || 
                (userMove == "scissors" && computerMove == "rock") ||
                (userMove == "paper" && computerMove == "scissors")):
                winnerEl.textContent= `${gameWinner} "Computer wins!"`;
                ComputerCounter++;
                totalGames++;
                break;
            default:
                winnerEl.textContent= "Try again with a valid option";
                break;
        }
    return ComputerCounter> playerCounter ? "Computer wins the whole match!" : "Player wins the whole match!"

    }
