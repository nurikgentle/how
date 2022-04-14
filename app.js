const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
 userChoice = e.target.id
 userChoiceDisplay.innerHTML = userChoice
 generateComputerChoice()
 getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.lenght
    
    if (randomNumber === 1) {
      computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'ITS A DRAW!'
    }

    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'YOU WON!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'YOU LOSE!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'YOU WON!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'YOU LOST!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'YOU WON!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'YOU LOST!'
    }
    resultDisplay.innerHTML = result

}