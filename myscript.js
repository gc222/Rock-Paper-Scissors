// global vars
let pScore = 0;
let cScore = 0;
const buttons = document.querySelectorAll(".player-move");
const gameOver = document.getElementById("game-over");

// reset button
const reset = document.createElement("button");
reset.textContent = "RESET GAME";
reset.classList.add("reset");

reset.addEventListener("click", resetGame);

// use .forEach on buttons nodeList to use eventListener on each button
// define an arrow function then call the playRound function and pass in arguments 
// dataset.selection is the predefined data var on the HTML button i.e. "rock"
buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.dataset.selection, computerPlay())
    })
})




function computerPlay() {
    const option = ["rock", "paper", "scissors"];
    return option[Math.floor(Math.random() * option.length)];
    // .random() returns 0 to 0.99... 
    // 0.333 * 3 = 0.999 -> any number below 0.333 -> floor to 0
    // 0.666 * 3 = 1.998 -> any number below 0.666 -> floor to 1
    // 0.999 * 3 = 2.997 -> any number below 0.999 -> floor to 2
}


function playRound(playerSelection, csel) {
    psel = playerSelection.toLowerCase()
    let roundRes;

    if (psel === csel) roundRes = "It's a draw."

    if (
        (psel == "rock" && csel == "scissors") ||
        (psel == "paper" && csel == "rock") ||
        (psel == "scissors" && csel == "paper")
    ) {
        pScore ++; 
        roundRes = `Your ${playerSelection} beats ${csel}!`;

    } else if (
        (psel == "rock" && csel == "paper") ||
        (psel == "paper" && csel == "scissors") || 
        (psel == "scissors" && csel == "rock")
    ) {
        cScore ++; 
        roundRes = `Your ${playerSelection} loses to ${csel}.`;
    }

    displayScore(roundRes)
    checkScore();
}


function displayScore(roundRes = "") {
    const displayPScore = document.getElementById("pscore");
    const displayCScore = document.getElementById("cscore");
    const roundResult = document.getElementById("round-result");

    displayPScore.textContent = `${pScore}`;
    displayCScore.textContent = `${cScore}`;

    roundResult.textContent = roundRes;
}

function checkScore() {

    if (pScore >= 5) {
        gameOver.textContent = "You won!";
    } else if (cScore >= 5) {
        gameOver.textContent = "You lost.";
    }

    // if game end then disable buttons and add a reset button
    if ((pScore >= 5) || (cScore >= 5)) {
        buttons.forEach(button => {
            button.disabled = true; 
        });
        document.body.appendChild(reset);
    }

}

function resetGame() {
    buttons.forEach(button => {
        button.disabled = false;
    });

    // reset scores
    pScore = 0;
    cScore = 0;
    displayScore()

    document.body.removeChild(reset);   // remove reset button
    gameOver.textContent = "";
}