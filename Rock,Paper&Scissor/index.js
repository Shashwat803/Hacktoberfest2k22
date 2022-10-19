
function getComputerChoice() {
    const rpsChoice = ["Rock", "Paper", "Scissor"]
    const randomNumber = [Math.floor(Math.random() * 3)]
    return rpsChoice[randomNumber]
}

function displayOnScreen(score, userChoice, computerChoice) {
    resultDiv = document.getElementById('result')
    handsDiv = document.getElementById('hands')
    playerScoreDiv = document.getElementById('player-score')

    if (score == -1) {
        resultDiv.innerText = "You Lose!"
    }
    else if (score == 0) {
        resultDiv.innerText = "Its a Tie"
    }
    else {
        resultDiv.innerText = "You Won"
    }
    handsDiv.innerText = `${userChoice} vs ${computerChoice}`


}

function getResult(userChoice, computerChoice) {
    let score;

    if (userChoice == computerChoice) {
        score = 0
    }
    else if (userChoice == "Rock" && computerChoice == "Scissor") {
        score = 1
    }
    else if (userChoice == "Paper" && computerChoice == "Rock") {
        score = 1
    }
    else if (userChoice == "Scissor" && computerChoice == "Paper") {
        score = 1
    }
    else {
        score = -1
    }
    return score

}

function onClickRPS(userChoice) {
    console.log({ userChoice })
    const displayComputerChoice = getComputerChoice()
    console.log({ displayComputerChoice })
    const score = getResult(userChoice, displayComputerChoice)
    displayOnScreen(score, userChoice, displayComputerChoice)
    console.log({ score })


}

function playGame() {
    const rpsButtons = document.querySelectorAll('.btn')

    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => { onClickRPS(rpsButton.value) }
    })
}

const endButton = document.getElementById('end-btn')
endButton.addEventListener("click", () => {
    endGame()
})

function endGame() {
    resultDiv = document.getElementById('result')
    handsDiv = document.getElementById('hands')
    playerScoreDiv = document.getElementById('player-score')

    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''

}

playGame()