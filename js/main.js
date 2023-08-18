const answers = ["rock-button", "paper-button", "scissors-button"];

//gets random answer from answer array, rock paper scissors
function getComputerChoice() {
    let npcAnswer = answers[Math.floor(Math.random() * answers.length)];
    return npcAnswer;
}

//player selectors
function playerSelector() {
    const rock = document.getElementById("rock-button");
    const paper = document.getElementById("paper-button");
    const scissors = document.getElementById("scissors-button");
    rock.addEventListener("click", function() {
        compareAnswers("rock-button", getComputerChoice());
    })
    paper.addEventListener("click", function() {
        compareAnswers("paper-button", getComputerChoice());
    }) 
    scissors.addEventListener("click", function() {
        compareAnswers("scissors-button", getComputerChoice());
})
}

//determines winner
function compareAnswers(button, computerAnswer) {
    p = button;
    npc = getComputerChoice();
    let pWin = 0;
    let nWin = 0;
    if (p === npc) {
        console.log("tie");
    } else if (p === "scissors-button" && npc == "paper-button" || 
    p === "paper-button" && npc == "rock-button" || 
    p === "rock-button" && npc == "scissors-button" || 
    p === "scissors-button" && npc === "paper-button") {
        ++pWin;
        console.log("playWin")
    } else {
        ++nWin;
        console.log("nWin")
    }
}

playerSelector()