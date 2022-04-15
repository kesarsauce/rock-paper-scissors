function computerPlay(){
    const plays = {
        1: 'rock',
        2: 'paper',
        3: 'scissors',
    };
    randPlay = plays[Math.floor(3*Math.random())+1];
    return randPlay;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "Draw";
    }
    switch(playerSelection.toLowerCase()){
        case 'rock': {
            if(computerSelection.toLowerCase()==='scissors'){
                return 'Win';
            }
            break;
        }
        case 'paper': {
            if(computerSelection.toLowerCase()==='rock'){
                return 'Win';
            }
            break;
        }
        case 'scissors': {
            if(computerSelection.toLowerCase()==='paper'){
                return 'Win';
            }
            break;
        }
    }

    return 'Loss';
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

result = document.querySelector('.result');
scoreboard = document.querySelector('.scoreboard');
playArea = document.querySelector('.play-area');
choices = document.querySelector('.choices');


playerScore = document.querySelector('span#player-score');
computerScore = document.querySelector('span#computer-score');

playerChoiceImg = document.querySelector('img#player-choice');
computerChoiceImg = document.querySelector('img#computer-choice');
buttons = document.querySelectorAll('img.choice');
console.log(buttons)

let round = 1;
buttons.forEach(btn => {
    btn.addEventListener('click', ()=> {
    btn.classList.add('selected');
    setTimeout(()=>btn.classList.remove('selected'), 100)
    computerMove = computerPlay();
    playerChoiceImg.src = `./images/${btn.id}.png`;
    
    computerChoiceImg.src = `./images/${computerMove}.png`;
    let outcome = playRound(btn.id, computerMove);
    updateScoreboard(outcome);
    round++;
    if(round>5){
        console.log('hey')
        difference = parseInt(playerScore.textContent) - parseInt(computerScore.textContent);
        showResultScreen(difference);
    }
}
    )});



function updateScoreboard(outcome){
    switch(outcome){
        case 'Win':{
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
            break;
        }
        case 'Loss':{
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
            break;
        }
        case 'Draw':{
            playerScore.textContent = parseInt(playerScore.textContent) + 0.5;
            computerScore.textContent = parseInt(computerScore.textContent) + 0.5;
            break;
        }
    }
}

function showResultScreen(difference){
    console.log(scoreboard);
    scoreboard.style.display = 'None';
    playArea.style.display = 'None';
    choices.style.display = 'None';
    result.style.display = 'block';
    result.style.fontSize = '45px';
    result.style.fontFamily = 'cursive'
    document.body.style.backgroundSize = 'contain';
    document.body.style.backgroundRepeat = 'no-repeat';

    
    console.log(result.style)
    if(difference>0){
        document.body.style.backgroundImage = "url('./images/win-screen.jpg')";
        result.textContent = 'You Win';
        result.style.color = 'pink';
    }
    else if(difference<0){
        document.body.style.backgroundImage = "url('./images/loss-screen.jpg')";
        result.textContent = 'You Lose...';
    }
    else{
        document.body.style.backgroundImage = "url('./images/draw-screen.jpg')";
        result.textContent = "It's a Draw!";
        result.style.color = 'white';
    }
}



