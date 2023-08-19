const answers = ["rock-button", "paper-button", "scissors-button"];

//score board
function scoreboard (result) {
    const playerScoreBoard = document.getElementById("playerscore");
    const computerScoreBoard = document.getElementById("npcscore");

    if (result === "player win") {
        playerScoreBoard.textContent = parseInt(playerScoreBoard.textContent) + 1;
    } else {
        computerScoreBoard.textContent = parseInt(computerScoreBoard.textContent) + 1;
    }
}

function disableButtons () {
    const allButtons = document.getElementsByClassName("button-rps");
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].disabled = true;
    }
}

//declare winner
function winner() {
    const playerScoreBoard = parseInt(document.getElementById("playerscore").textContent);
    const computerScoreBoard = parseInt(document.getElementById("npcscore").textContent)
    if (playerScoreBoard === 5 || computerScoreBoard === 5) {
        if (playerScoreBoard > computerScoreBoard) {
            disableButtons();
            document.getElementById("winner").textContent = "player wins!";
        } else if (computerScoreBoard > playerScoreBoard) {
            disableButtons();
            document.getElementById("winner").textContent = "computer wins!";
        }
    }
}

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

    rock.addEventListener("click", function play() {
        compareAnswers("rock-button", getComputerChoice());
    })
    paper.addEventListener("click", function play() {
        compareAnswers("paper-button", getComputerChoice());
    }) 
    scissors.addEventListener("click", function play() {
        compareAnswers("scissors-button", getComputerChoice());
    })
}


//compares answers
function compareAnswers(button, computerAnswer) {
    p = button;
    npc = getComputerChoice();
    let pWin = 0;
    let nWin = 0;
    if (p === npc) {
        return;
    } else if (p === "scissors-button" && npc == "paper-button" || 
    p === "paper-button" && npc == "rock-button" || 
    p === "rock-button" && npc == "scissors-button" || 
    p === "scissors-button" && npc === "paper-button") {
        scoreboard("player win");
    } else {
        scoreboard("computer win");
    }

    winner();
}


playerSelector();