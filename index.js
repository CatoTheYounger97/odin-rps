

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
    return `You Draw! You both chose ${playerChoice}`;

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
    if ( winStatus ) {
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    } else {
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
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
