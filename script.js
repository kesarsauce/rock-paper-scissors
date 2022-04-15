function computerPlay(){
    const plays = {
        1: 'Rock',
        2: 'Paper',
        3: 'Scissors',
    };
    randPlay = plays[Math.floor(3*Math.random())+1];
    return randPlay;
}

function playRound(playerSelection, computerSelection){
    const rules = {
        'paper':{
            'rock':'You Win! Paper beats Rock.',
            'scissors': 'You Lose! Scissors beats Paper.',
        },
        'rock':{
            'scissors': 'You Win! Rock beats Scissors.',
            'paper': 'You Lose! Paper beats Rock.',
        },
        'scissors':{
            'paper': 'You Win! Scissors beats Paper.',
            'rock': 'You Lose! Rock beats Scissors.',
        }
    }

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return "It's a Draw!";
    }

    else {
        return rules[playerSelection.toLowerCase()]
                [computerSelection.toLowerCase()];
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let round=1; round<=5; round++){
        let userInput = prompt(`Round ${round}\nChoose one 
                (rock/paper/scissors): `);
        if (userInput === null){
            return;
        }
        if (!['rock', 'paper', 'scissors'].includes(userInput.toLowerCase())){
            console.log("Fine, don't play");
            return;
        }
        result = playRound(userInput, computerPlay());
        console.log(result);
        if (result.startsWith('You Win')){
            playerScore += 1;
        }
        else if(result.startsWith('You Lose')){
            computerScore += 1;
        }
        else{
            playerScore += 0.5;
            computerScore += 0.5;
        }
    }
    console.log(`Score: ${playerScore}:${computerScore}`);
    
}

game()