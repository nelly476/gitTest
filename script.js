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

// function getHumanChoice() {
//     const input = prompt("choose rock/paper/scissors") 
//     return input
// }

function playRound(human) {
    // const human = getHumanChoice()
    const computer = getComputerChoice()
    if (human === "rock") {
        if (computer === "rock") {
            return `human - ${human}, computer - ${computer}, so it's a tie`
        } else if (computer === "scissors") {
            return `human - ${human}, computer - ${computer}, so human wins`
        } else {
            return `human - ${human}, computer - ${computer}, so computer wins`
        }
    }
    else if (human === "paper") {
        if (computer === "paper") {
            return `human - ${human}, computer - ${computer}, so it's a tie`
        } else if (computer === "rock") {
            return `human - ${human}, computer - ${computer}, so human wins`
        } else {
            return `human - ${human}, computer - ${computer}, so computer wins`
        }
    } 
    else if (human === "scissors") {
        if (computer === "scissors") {
            return `human - ${human}, computer - ${computer}, so it's a tie`
        } else if (computer === "paper") {
            return `human - ${human}, computer - ${computer}, so human wins`
        } else {
            return `human - ${human}, computer - ${computer}, so computer wins`
        }
    }
    return "ERROR"

}

// console.log(playRound())


// const container = document.querySelector("#container");

// const content = document.createElement("div")
// content.classList.add("content")
// content.textContent = "Text content"

// const paragraph = document.createElement("p")
// paragraph.style.color = "red"
// paragraph.textContent = "I'm red"

// container.appendChild(content)
// container.appendChild(paragraph)

const buttons = document.querySelectorAll("#button")

buttons.forEach(button => {
    button.addEventListener("click", e => {
        switch (e.target.textContent) {
            case "Rock":
                // console.log("it's rock")
                console.log(playRound("rock"))
                break;
            case "Paper":
                // console.log("it's paper")
                console.log(playRound("paper"))
                break;
            case "Scissors":
                // console.log("it's scissors")
                console.log(playRound("scissors"))
                break;
            
            // default:
            //     console.log("error, no such button")
        }
        // console.log(e.target.textContent === "Rock")
    })
})

// console.log(buttons)

