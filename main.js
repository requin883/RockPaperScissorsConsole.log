function computerPlay(){
        let computerMove = Math.floor(Math.random()*3)+1;
        return computerMove == 1 ? "Rock" : computerMove == 2 ? "Paper" : "Scissors";
}

function userPlay(){
    let userMove = prompt("Choose rock,paper or scissors")
    return userMove[0].toUpperCase() + userMove.slice(1).toLowerCase();
}
function playGame(){
    let ComputerCounter = 0;
    let playerCounter = 0;
    let totalGames = 0;
        let computerMove = computerPlay();
        let userMove = userPlay();
        let gameWinner = `Player played ${userMove} and Computer played ${computerMove} and `;
        switch(true){
            case (computerMove == userMove):
                console.log(gameWinner+="This is a draw!")
                totalGames++;
                break;
            case ((computerMove == "Rock" && userMove == "Paper") || 
            (computerMove == "Scissors" && userMove == "Rock") ||
            (computerMove == "Paper" && userMove == "Scissors")):
                console.log(gameWinner+="Player wins!")
                playerCounter++;
                totalGames++;
                break;
                case ((userMove == "Rock" && computerMove == "Paper") || 
                (userMove == "Scissors" && computerMove == "Rock") ||
                (userMove == "Paper" && computerMove == "Scissors")):
                console.log(gameWinner+="Computer wins!")
                ComputerCounter++;
                totalGames++;
                break;
            default:
                console.log("Try again with a valid option");
                break;
        }
    return ComputerCounter> playerCounter ? "Computer wins the whole match!" : "Player wins the whole match!"

    }

console.log(playGame());