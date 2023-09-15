let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    let playGame = () => {
        let rockButton = document.querySelector('.rock');
        let paperButton = document.querySelector('.paper');
        let scissorButton = document.querySelector('.scissors');
        let pOptions = [rockButton, paperButton, scissorButton];
        let cOptions = ['rock', 'paper', 'scissors'];

        /* Function to start playing game */
        pOptions.forEach(option => {
            option.addEventListener('click', function () {
                let movesLeft = document.querySelector('.movesLeft');
                moves++;
                movesLeft.innerText = `Moves Left: ${7-moves}`;

                let numberChoice = Math.floor(Math.random() * 3);
                let computersChoice = cOptions[numberChoice];

                /*  Function Who wins */
                 
                winner(this.innerText, computersChoice);
                /* Gameover function after 7 moves */
                if(moves == 7) {
                    gameOver(pOptions, movesLeft);
                }


            });
            
        });
    };

  

/* Function to decide who is the winner */
let winner = (player, computer) => {
    let result = document.querySelector('.result');
    let pScoreBoard = document.querySelector('.playerCount');
    let cScoreBoard = document.querySelector('.computerCount');
   

    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer){
        result.textContent = "It's a Tie!";
    }
    else if (player == 'rock'){
        if (computer == 'paper'){
        result.textContent = 'Sorry, the computer won!';
        computerScore++;
        cScoreBoard.textContent = computerScore;
        
           } else {
        result.textContent = "You won!";
        playerScore++;
        pScoreBoard.textContent = playerScore;
    }
} 
    else if(player == 'scissors'){
    if(computer == 'rock'){
        result.textContent = 'Sorry, the computer won!';
        computerScore++;
        cScoreBoard.textContent = computerScore; 
       
       
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
        cScoreBoard.textContent = computerScore;
        
    } else {
        result.textContent = 'You won!';
        playerScore++;
        pScoreBoard.textContent = playerScore;
    }
    
    
} 
};


/* Function that runs when the game is over */
let gameOver = (pOptions, movesLeft) => {
    let move = document.querySelector('.makeMove');
    let result = document.querySelector('.result');
    let reload = document.querySelector('.reload');

    pOptions.forEach(option => {
        option.style.display = 'none';
    });

    move.innerText = 'Game Finished!';
    movesLeft.style.display = 'none';

    if(playerScore > computerScore){
        result.style.fontSize = '2.5rem';
        result.innerText = 'Yay! You Won The Game! :D';
        result.style.color = '#344B48';
        alert("Woho! You won the game!");
    } else if(playerScore < computerScore){
        result.style.fontSize = '2.5rem';
        result.innerText = 'Sorry, you lost this time. Try again!';
        result.style.color = '#344B48';
        alert("You lost this time, give it another go!");
    } else{
        result.style.fontSize = '2.5rem';
        result.innerText = "It's a Tie!";
        result.style.color = '#344B48';
        alert("It's a tie!");
    }
    reload.innerText = 'Try Again!';
    reload.style.display = 'flex';
    reload.addEventListener('click',() => {
        window.location.reload();
    });
};
    /* Calling the playGame function*/
    playGame();
};


/* Calling the game function */
game();

/* Function for scroll button */

function scrollToTop() {
    window.scrollTo(0, 0);
}
 