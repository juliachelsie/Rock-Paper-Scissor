const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        const rockButton = document.querySelector('.rock');
        const paperButton = document.querySelector('.paper');
        const scissorButton = document.querySelector('.scissors');
        const pOptions = [rockButton, paperButton, scissorButton];
        const cOptions = ['rock', 'paper', 'scissor'];

        /* function to start playing game */
        pOptions.forEach(option => {
            option.addEventListener('click', function () {
                const movesLeft = document.querySelector('.movesLeft');

                const numberChoice = Math.floor(Math.random() * 3);
                const computersChoice = cOptions[numberChoice];

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
const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const pScoreBoard = document.querySelector('.playerCount');
    const cScoreboard = document.querySelector('.computerCount');
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
const gameOver = (pOptions, movesLeft) => {
    const move = document.querySelector('.makeMove');
    const result = document.querySelector('.result');
    const reload = document.querySelector('.reload');

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
    
   

}


