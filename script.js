const buttons = document.querySelectorAll("#button")
const resultField = document.querySelector("#resultField")
const computerScoreField = document.querySelector("#computerScoreField")
const humanScoreField = document.querySelector("#humanScoreField")

let HumanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3)
    if (num === 1) {
        return "rock"
    } else if (num === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function displaySelection(result) {
    if (!resultField.hasChildNodes()) {
    } else {
        resultField.textContent = ""
    }
    resultField.textContent = result
}

function updateScore() {
    computerScoreField.textContent = computerScore
    humanScoreField.textContent = HumanScore

    if (HumanScore === 5 || computerScore === 5) {
        resultField.textContent = HumanScore > computerScore ? "Human won!!!" : "Computer won!!!"
        HumanScore = 0;
        computerScore = 0;
    }
}


function playRound(human) {
    const computer = getComputerChoice()
    let message = ""
    if (human === "rock") {
        if (computer === "rock") {
            message = `human - ${human}, computer - ${computer}, so it's a tie`
        } else if (computer === "scissors") {
            message = `human - ${human}, computer - ${computer}, so human wins`
            HumanScore++
        } else {
            message = `human - ${human}, computer - ${computer}, so computer wins`
            computerScore++
        }
    }
    else if (human === "paper") {
        if (computer === "paper") {
            message = `human - ${human}, computer - ${computer}, so it's a tie`
        } else if (computer === "rock") {
            message = `human - ${human}, computer - ${computer}, so human wins`
            HumanScore++
        } else {
            message = `human - ${human}, computer - ${computer}, so computer wins`
            computerScore++
        }
    } 
    else if (human === "scissors") {
        if (computer === "scissors") {
            message = `human - ${human}, computer - ${computer}, so it's a tie`
        } else if (computer === "paper") {
            message = `human - ${human}, computer - ${computer}, so human wins`
            HumanScore++
        } else {
            message = `human - ${human}, computer - ${computer}, so computer wins`
            computerScore++
        }
    }
    displaySelection(message)
    updateScore()

}



buttons.forEach(button => {
    button.addEventListener("click", e => {
        switch (e.target.textContent) {
            case "Rock":
                playRound("rock")
             break;
            case "Paper":
            playRound("paper")
              break;
            case "Scissors":
               playRound("scissors")
                break;
            
            default:
                console.log("error, no such button")
        }
    })
})


