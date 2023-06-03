

function getComputerChoice()
{
    const choice = ["Rock", "Paper", "Scissors"];

    let randInt = Math.floor( Math.random() * 3 );

    return choice[randInt];
}

function playRPS( playerChoiceRaw, computerChoice )
{
    // fix case of player hand to have first letter capitalised
    const playerChoice = playerChoiceRaw.charAt(0).toUpperCase() +  playerChoiceRaw.slice(1).toLowerCase()

    if (playerChoice === computerChoice)
    return `You Draw! You both chose ${playerChoice}`;

    let winStatus = "Lose";
    let winHand = computerChoice;
    let lostHand = playerChoice;

    switch(playerChoice)
    {
        case "Rock":
            if (computerChoice === "Scissors") {
                winStatus = "Win";
                winHand = playerChoice;
                lostHand = computerChoice;
            }
            break;
        case "Paper":
            if (computerChoice === "Rock") {
                winStatus = "Win";
                winHand = playerChoice;
                lostHand = computerChoice;
            }
            break;
        case "Scissors":
            if (computerChoice === "Paper") {
                winStatus = "Win";
                winHand = playerChoice;
                lostHand = computerChoice;
            }
            break;
    }

    return `You ${winStatus}! ${winHand} beats ${lostHand}`;
    // return win status, player hand, computer hand.
}

function game()
{
    for (iii = 0; iii < 5; ++iii)
    {
        console.log( 
            playRPS( prompt(), getComputerChoice() )
        );
    }
}


game();