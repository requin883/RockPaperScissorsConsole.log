function computerPlay(){
        let computerMove = Math.floor(Math.random()*3)+1;
        return computerMove == 1 ? "Rock" : computerMove == 2 ? "Paper" : "Scissors";
}

function userPlay(){
    let userMove = prompt("Choose rock,paper or scissors")
    return userMove[0].toUpperCase() + userMove.slice(1).toLowerCase();
}
function playGame(){
    let resetGame = 0;
    while (resetGame == 0){
        let computerMove = computerPlay();
        let userMove = userPlay();
        let gameWinner = `Player played ${userMove} and Computer played ${computerMove} and `;
        switch(true){
            case (computerMove == userMove):
                gameWinner += "This is a Draw!";
                break;
            case ((computerMove == "Rock" && userMove == "Paper") || 
            (computerMove == "Scissors" && userMove == "Rock") ||
            (computerMove == "Paper" && userMove == "Scissors")):
                gameWinner += "Player wins!";
                break;
            default:
                gameWinner += "Computer Wins!"
                break;
        }
        console.log(gameWinner);
        resetGame = parseInt(prompt("If you want stop playing please press any number"));

    }
}
playGame();