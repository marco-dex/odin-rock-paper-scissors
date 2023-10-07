function getComputerChoice() {
    let choice = Math.ceil(Math.random()*3)
    if (choice === 1) {
        return 'Rock'
    } 
    else if (choice === 2) {
        return 'Paper'
    }
    else {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Rock') {
        return "You Lose! Rock beats Paper"
    }

    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Scissors') {
        return "You Lose! Scissors beats Paper"
    }

    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Paper') {
        return "You Lose! Paper beats Rock"
    }

    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'Rock') {
        return "You Win! Paper beats Rock"
    }

    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'Scissors') {
        return "You Win! Rock beats Scissors"
    }

    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'Paper') {
        return "You Win! Scissors beats Paper"
    }

    else {
        return "It's a draw!"
    }
}


function game() {

    let playerWins = 0
    let computerWins = 0

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('enter your move: ')
        let computerChoice = getComputerChoice()
        let result = playRound(playerChoice, computerChoice)

        if (result.includes('Win')) {
            playerWins++
        }
        else if (result.includes('Lose')) {
            computerWins++
        }
        
        console.log(result)
    }

    console.log(`You won ${playerWins} games and the computer won ${computerWins} games`)

}