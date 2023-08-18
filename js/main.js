let answers = ["rock-button", "paper-button", "scissors-button"];

//gets random answer from answer array, rock paper scissors
function getComputerChoice() {
    let npcAnswer = answers[Math.floor(Math.random() * answers.length)];
    return npcAnswer;
}

//gets player answer
function playerSelector() {
    rpsChoice = document.querySelectorAll(".button-rps");
    rpsChoice.forEach(e => {
        e.addEventListener("click", function() {
            compareAnswers(e.id);
        })
    });
}

//determines winner
function compareAnswers(playerSelection) {
    const p = playerSelection;
    const npc = getComputerChoice();

    if (p === npc) {
        console.log("3");
        return "its a tie!!!!!";
    } else if (p === "scissors-button" && npc == "paper-button") {
        console.log("*");
        return "Scissors beat paper\;you win this round!!!";
    } else if (p === "paper-button" && npc == "rock-button") {
        console.log("1");
        return "Paper beats rock\; you win this round!!!";
    } else if (p === "rock-button" && npc == "scissors-button") {
        console.log("2");
        return "Rock beats scissors\; you win this round!!!";
    }
    else {
        console.log("6");
        return "Sorry, you lost this round!";
    }

}

playerSelector()