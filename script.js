
let humanChoice;
let choices = document.getElementById('choices')

const btn_1 = document.querySelector("#btn-1");
const btn_2 = document.querySelector("#btn-2");
const btn_3 = document.querySelector("#btn-3");



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
        choices.innerHTML = "your choice: "+ humanChoice+", computer choice: "+ CompChoice;
        return "it's a draw "
    }else if(humanChoice == "ROCK" && CompChoice == "PAPER"){
        choices.innerHTML = "your choice: "+ humanChoice+", computer choice: "+ CompChoice;
        return "computer wins";
    }else if(humanChoice == "PAPER" && CompChoice == "ROCK"){
        choices.innerHTML = "your choice: "+ humanChoice+", computer choice: "+ CompChoice;
        return "human wins";
    }else if(humanChoice == "ROCK" && CompChoice == "SCISSORS"){
        choices.innerHTML = "your choice: "+ humanChoice+", computer choice: "+ CompChoice;
        return "human wins";
    }else if(humanChoice == "SCISSORS" && CompChoice == "ROCK"){
        choices.innerText = "your choice: "+ humanChoice+", computer choice: "+ CompChoice;
        return "computer wins";
    }else if(humanChoice == "SCISSORS" && CompChoice == "PAPER"){
        choices.textContent = "your choice: "+ humanChoice+", computer choice: "+ CompChoice;
        return "human wins";
    }else if(humanChoice == "PAPER" && CompChoice == "SCISSORS"){
        choices.innerHTML = "your choice: "+ humanChoice+", computer choice: "+ CompChoice;
        return "computer wins";
    };
}


humanChoice = btn_1.addEventListener("click", () => {
    humanChoice = 1;
    console.log(humanChoice)
    return humanChoice;
});

humanChoice = btn_2.addEventListener("click", () => {
    humanChoice = 2;
    console.log(humanChoice)
    return humanChoice;
});

humanChoice = btn_3.addEventListener("click", () => {
    humanChoice = 3;
    console.log(humanChoice)
    return humanChoice;
});
// let humanChoice = prompt("Enter your choice 1.Rock , 2. Paper, 3. Scissors");

    let humanScore = 0;
    let computerScore = 0;
        CompGuess = getComputerChoice();
        humanGuess = getHumanChoice(humanChoice);        
        play = playRound(humanGuess, CompGuess)

        

        

        // if(play == "computer wins"){
        //     computerScore += 1;
        // }else if (play == "human wins"){
        //     humanScore += 1;
        // }


    // if(computerScore > humanScore){
    //     console.log('computer wins')
    // }else{
    //     console.log('you win')
    // }
    // return 'computerScore:' + computerScore + ' humanscore:' + humanScore;


// console.log(playGame());

// console.log(CompGuess);
// console.log(humanGuess);
