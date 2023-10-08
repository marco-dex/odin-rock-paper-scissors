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


const buttons = document.querySelectorAll('button')

const compResults = document.querySelector('#comp-result')
const playerResults = document.querySelector('#player-result')
const drawResults = document.querySelector('#draw-result')

let compScore = 0
let playerScore = 0


buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let result = playRound(button.innerText, getComputerChoice());

            let div = document.createElement('div')
            div.innerText = result 

            if (result.includes('Win')) {
                playerResults.appendChild(div)
                div.innerText = result;
            }

            else if (result.includes('Lose')) {
                compResults.appendChild(div)
                div.innerText = result;
            }

            else {
                drawResults.appendChild(div)
                div.innerText = result;
            }
            
            if (result.includes('Win')) {
                playerScore++
                console.log(playerScore)
            }
            else if (result.includes('Lose')) {
                compScore++
                console.log(compScore)
            }

            if (playerScore >= 5 || compScore >= 5) {
                if (playerScore > compScore) {
                    alert('game over, you won!')
                }
                else if (playerScore < compScore) {
                    alert('game over, you lost!')
            }
        }
        });
});