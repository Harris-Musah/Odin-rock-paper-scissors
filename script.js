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

function getHumanChoice(humanChoice){
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
        console.log("your choice: "+ humanChoice+", computer choice: "+ CompChoice);
        return "computer wins";
    }else if(humanChoice == "PAPER" && CompChoice == "ROCK"){
        console.log("your choice: "+ humanChoice+", computer choice: "+ CompChoice);
        return "human wins";
    }else if(humanChoice == "ROCK" && CompChoice == "SCISSORS"){
        console.log("your choice: "+ humanChoice+", computer choice: "+ CompChoice)
        return "human wins";
    }else if(humanChoice == "SCISSORS" && CompChoice == "ROCK"){
        console.log("your choice: "+ humanChoice+", computer choice: "+ CompChoice)
        return "computer wins";
    }else if(humanChoice == "SCISSORS" && CompChoice == "PAPER"){
        console.log("your choice: "+ humanChoice+", computer choice: "+ CompChoice)
        return "human wins";
    }else if(humanChoice == "PAPER" && CompChoice == "SCISSORS"){
        console.log("your choice: "+ humanChoice+", computer choice: "+ CompChoice);
        return "computer wins";
    };
}


// let humanChoice = prompt("Enter your choice 1.Rock , 2. Paper, 3. Scissors");

 function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for(i =0; i<5; i++){
        let humanChoice = prompt("Enter your choice 1.Rock , 2. Paper, 3. Scissors");
        CompGuess = getComputerChoice();
        humanGuess = getHumanChoice(humanChoice);        
        play = playRound(humanGuess, CompGuess)

        if(play == "computer wins"){
            computerScore += 1;
        }else if (play == "human wins"){
            humanScore += 1;
        }
    }
    if(computerScore > humanScore){
        console.log('computer wins')
    }else{
        console.log('you win')
    }
    return 'computerScore:' + computerScore + ' humanscore:' + humanScore;
}


console.log(playGame());

// console.log(CompGuess);
// console.log(humanGuess);
