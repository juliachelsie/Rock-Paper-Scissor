let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        let rockButton = document.querySelector('.rock');
        let paperButton = document.querySelector('.paper');
        let scissorButton = document.querySelector('.scissors');
        let pOptions = [rockButton, paperButton, scissorButton];
        let cOptions = ['rock', 'paper', 'scissor'];

        /* function to start playing game */
        pOptions.forEach(option => {
            option.addEventListener('click', function () {
                let movesLeft = document.querySelector('.movesLeft');

                let numberChoice = Math.floor(Math.random() * 3);
                let computersChoice = cOptions[numberChoice];

                /*  Function who wins */
                 
                winner(this.innerText, computersChoice);
                /* Gameover function after 7 moves */
                if (moves === 7) {
                    gameOver(pOptions, movesLeft);
                }


            });
        });
    };
};
/* Function to decide who is the winner */
let winner = (player, computer) => {
    let result = document.querySelector('.result');
    let pScoreBoard = document.querySelector('.playerCount');
    let cScoreboard = document.querySelector('.computerCount');
    /* player to lowercsae???????*/
    if (player === computer){
        result.textContent = "It's a Tie!"
    }
    else if (player == 'rock'){
        if (computer == 'paper'){
        result.textContent = 'Sorry, the computer won!';
        computerScore++;
        cScoreboard.textContent = computerScore;
    } else {
        result.textContent = "You won!"
        playerScore++;
        pScoreBoard.textContent = playerScore;
    }
} 
    else if(player == 'scissors'){
    if(computer == 'rock'){
        result.textContent = 'Sorry, the computer won!';
        computerScore++;
        cScoreboard.textContent = computerScore;
    } else {
        result.textContent = 'You won!';
        playerScore++;
        pScoreBoard.textContent = playerScore;
    }
}
else if(player == 'paper'){
    if(computer == 'scissors'){
        result.textContent = 'Sorry, the computer won!';
        computerScore++;
        cScoreboard.textContent = computerScore;
    } else {
        result.textContent = 'You won!';
        playerScore++;
        pScoreBoard.textContent = playerScore;
    }
} 
}

/* Function that runs when the game is over */
let gameOver = (pOptions, movesLeft) => {
    let move = document.querySelector('.makeMove');
    let result = document.querySelector('.result');
    let reload = document.querySelector('.reload');

    pOptions.forEach(option => {
        option.style.display = 'none';
    })

    move.innerText = 'Game Over!'
    movesLeft.style.display = 'none';

    if(playerScore > computerScore){
        result.style.fontSize = '3rem';
        result.innerText = 'yay You Won The Game! :D';
        result.style.color = '#344B48';
    } else if(playerScore < computerScore){
        result.style.fontSize = '3rem';
        result.innerText = 'Sorry, you lost this time. Try again!';
        result.style.color = '#344B48';
    } else{
        result.style.fontSize = '3rem';
        result.innerText = "It's a Tie!";
        result.style.color = '#344B48';
    }
    reload.innerText = 'Try Again!';
    reload.style.display = 'flex';
    reload.addEventListener('click',() => {
        window.location.reload();
    })
    
    playGame();

}

game();

