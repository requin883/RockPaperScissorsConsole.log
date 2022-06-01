function computerPlay(){
        let value = Math.floor(Math.random()*3)+1;
        return value == 1 ? "Rock" : value == 2 ? "Paper" : "Scissors";
}
console.log(computerPlay());