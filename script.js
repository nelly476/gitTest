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

function getHumanChoice() {
    const input = prompt("choose rock/paper/scissors") 
    return input
}

function playRound() {
    const human = getHumanChoice()
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
    else {
        if (computer === "scissors") {
            return `human - ${human}, computer - ${computer}, so it's a tie`
        } else if (computer === "paper") {
            return `human - ${human}, computer - ${computer}, so human wins`
        } else {
            return `human - ${human}, computer - ${computer}, so computer wins`
        }
    }

    return human + computer
}

console.log(playRound())