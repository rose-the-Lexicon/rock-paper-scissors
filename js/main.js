let answers = ["rock", "paper", "scissors"];

//gets random answer from answer array, rock paper scissors
function getComputerChoice() {
    let npcAnswer = answers[Math.floor(Math.random() * answers.length)];
    return npcAnswer;
}

//gets player answer
function playerSelection() {
    let playerAnswer = prompt("rock, paper, or scissors?").toLowerCase;
    return playerAnswer;
}

//determines winner
function compareAnswers() {
    const p = playerSelection();
    const npc = getComputerChoice();

    if (p === npc) {
        return "its a tie!!!!!";
    } else if (p === "scissors" && npc == "paper") {
        return "Scissors beat paper\;you win this round!!!";
    } else if (p === "paper" && npc == "rock") {
        return "Paper beats rock\; you win this round!!!";
    } else if (p === "rock" && npc == "scissors") {
        return "Rock beats scissors\; you win this round!!!";
    }
    else {
        return "Sorry, you lost this round!";
    }

}

function game() {
    let pWins;
    let npcWins;
    let limit = prompt("how many rounds of rock-paper-scissors do you want to play");
    
    //reprompts them when needed
    while (Number.isInteger(parseInt(limit)) != true || parseInt(limit) < 1) {
        limit = prompt("Please only put positive ints!");
    }

    //for loop that loops game and counts game wins
    for (i = 0 ; i < limit ; ++i) {
        let round = compareAnswers();
        
        if (round === "Sorry, you lost this round!") {
            ++npcWins;
        } else if (round === "its a tie!!!!!") {
            --i;
        } else {
            ++pWins;
        }
    }

    if (npcWins > pWins) {
        alert("you lost!!!");
    } else {
        alert("you win!!!");
    }
}