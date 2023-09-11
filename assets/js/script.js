const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        const rockButton = document.querySelector('rock');
        const paperButton = document.querySelector('paper');
        const scissorButton = document.querySelector('scissors');
        const pOptions = [rockButton, paperButton, scissorButton];
        const cOptions = ['rock', 'paper', 'scissor']

        /* function to start playing game */
        pOptions.forEach(option => {
            option.addEventListener('click', function() {
                const movesLeft = document.querySelector('.movesLeft');

                const numberChoice = Math.floor(Math.random()*3);
                const computersChoice = cOptions[numberChoice];

                /* Function Who wins */
                winner(this.innerText,computersChoice)
                /* Gameover function after 7 moves */
                if (moves === 7) {
                    gameOver(pOptions,movesLeft);
                }
            })
        })
    };
};

const winner = (player, computer) => {

}
