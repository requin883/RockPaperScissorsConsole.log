function computerPlay(){
        let computerMove = Math.floor(Math.random()*3)+1;
        return computerMove == 1 ? "Rock" : computerMove == 2 ? "Paper" : "Scissors";
}

function userPlay(){
    let userMove = prompt("Choose rock,paper or scissors")
    return userMove.toLowerCase();
}

console.log(userPlay());