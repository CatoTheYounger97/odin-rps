

function getComputerChoice()
{
    const choice = ["Rock", "Paper", "Scissors"];

    let randInt = Math.floor( Math.random() * 3 );

    return choice[randInt];
}

function playRPS( playerChoiceRaw, computerChoice )
{
    // fix case of player hand to have first letter capitalised
    const playerChoice = playerChoiceRaw.charAt(0).toUpperCase() +  playerChoiceRaw.slice(1).toLowerCase();

    if (playerChoice === computerChoice)
        return "draw";

    let winStatus = false;

    switch(playerChoice)
    {
        case "Rock":
            if (computerChoice === "Scissors") 
                winStatus = true;
            break;
        case "Paper":
            if (computerChoice === "Rock") 
                winStatus = true;
            break;
        case "Scissors":
            if (computerChoice === "Paper") 
                winStatus = true;
            break;
    }
    
    // return win status, player hand, computer hand.
    if (  winStatus ) {
        return "win";
    } else {
        return "lose";
    }
}

function game()
{
    const buttons = document.querySelectorAll("button");

    buttons.forEach( (button) => {
        button.addEventListener('click', () => {

            const playerChoice = button.textContent;
            const computerChoice = getComputerChoice();
            let gameResult = playRPS( playerChoice, computerChoice );

            let playerScore = 0;
            let computerScore = 0;

            displayGame(playerChoice, computerChoice, gameResult, playerScore, computerScore);

            
            // if (playerScore >= 5) {

            //     alert("game over")
            //     resetGame();
            // }
            // if (computerScore >= 5) {
            //     alert("game over");
            //     resetGame();

            // }
        });
    });
}
function displayGame(playerChoice, computerChoice, gameResult, playerScore, computerScore)
{
    const displayResult = document.querySelector(".Result");
    const displayPlayerScore = document.querySelector(".PlayerScore");
    const displayCpuScore = document.querySelector(".CpuScore");

    switch (gameResult)
    {
        case "draw":
            displayResult.textContent = `You Draw! You both chose ${playerChoice}`;
            break;

        case "win":
            displayResult.textContent = `You Win! ${playerChoice} beats ${computerChoice}`;
            displayPlayerScore.textContent = playerScore;
            break;

        case "lose":
            displayResult.textContent = `You Lose! ${computerChoice} beats ${playerChoice}`;
            displayCpuScore.textContent = computerScore;
            break;

        default: 
            displayResult.textContent = "something is wrong";

    }

}
function resetGame()
{
    document.querySelector(".Result").textContent = "";
    document.querySelector(".PlayerScore").textContent = "";
    document.querySelector(".CpuScore").textContent = "";
}


game();