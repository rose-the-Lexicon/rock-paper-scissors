let answers = ["rock", "paper", "scissors"];

//gets random answer from answer array, rock paper scissors
function npcPlayer() {
    let npcAnswer = answers[Math.floor(Math.random() * answers.length)];
    return npcAnswer;
}

//gets player answer from html selection
function player() {
    let playerAnswer = (document.getElementById("rock-paper-scissors")).value;
    return playerAnswer;
}

