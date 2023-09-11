const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        const rockButton = document.querySelector('rock');
        const paperButton = document.querySelector('paper');
        const scissorButton = document.querySelector('scissors');
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
        if (computer == 'paper')
        result.textContent = 'Sorry, the computer won!';
        computerScore++;
        cScoreboard.textContent = computerScore;
    } else {
        result.textContent = "You won!"
        playerScore++;
        pScoreBoard.textContent = playerScore;
    }
}
