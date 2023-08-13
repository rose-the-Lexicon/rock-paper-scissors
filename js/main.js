let answers = ["rock", "paper", "scissors"];

//gets random answer from answer array, rock paper scissors
function aiPlayer() {
    let aiAnswer = answers[Math.floor(Math.random() * answers.length)];
    return aiAnswer;
}

//gets player answer from html selection
function player() {
    let playerAnswer = (document.getElementById("rock-paper-scissors")).value;
    return playerAnswer;
}

