function getComputerChoice(){
    let CompChoice = Math.random()
    if(CompChoice < 0.33){
        return "ROCK"
    }else if(CompChoice >0.33 && CompChoice < 0.66){
        return "PAPER"
    }else{
        return "SCISSORS"
    };
}

function getHumanChoice(){
    if (humanChoice == 1){
        return "ROCK"
    }else if(humanChoice == 2){
        return "PAPER"
    }else if (humanChoice == 3){
        return "SCISSORS"
    }else{
        return "Start and choose between 1 and 3"
    }
}

function playRound(humanChoice, CompChoice){
    if (humanChoice == CompChoice){
        console.log("your choice: "+ humanChoice+", computer choice: "+ CompChoice);
        return "it's a draw "
    }else if(humanChoice == "ROCK" && CompChoice == "PAPER"){
        computerScore +=1;
        console.log("your choice: "+ humanChoice+", computer choice: "+ CompChoice);
        return "computer wins";
    }else if(humanChoice == "PAPER" && CompChoice == "ROCK"){
        humanScore +=1;
        console.log("your choice: "+ humanChoice+", computer choice: "+ CompChoice);
        return "human wins";
    }else if(humanChoice == "ROCK" && CompChoice == "SCISSORS"){
        humanScore +=1;
        console.log("your choice: "+ humanChoice+", computer choice: "+ CompChoice)
        return "human wins";
    }else if(humanChoice == "SCISSORS" && CompChoice == "ROCK"){
        computerScore +=1;
        console.log("your choice: "+ humanChoice+", computer choice: "+ CompChoice)
        return "computer wins";
    }else if(humanChoice == "SCISSORS" && CompChoice == "PAPER"){
        humanScore +=1;
        console.log("your choice: "+ humanChoice+", computer choice: "+ CompChoice)
        return "human wins";
    }else if(humanChoice == "PAPER" && CompChoice == "SCISSORS"){
        computerScore +=1;
        console.log("your choice: "+ humanChoice+", computer choice: "+ CompChoice);
        return "computer wins";
    };
}

let humanChoice = prompt("Enter your choice 1.Rock , 2. Paper, 3. Scissors");
let humanScore = 0;
let computerScore = 0;

CompGuess = getComputerChoice();
humanGuess = getComputerChoice();

// console.log(CompGuess);
// console.log(humanGuess);

console.log(playRound(humanGuess, CompGuess))