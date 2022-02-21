function computerPlay() {
    const option = ["rock", "paper", "scissors"];
    return option[Math.floor(Math.random() * option.length)];
    // .random() returns 0 to 0.99... 
    // 0.333 * 3 = 0.999 -> any number below 0.333 -> floor to 0
    // 0.666 * 3 = 1.998 -> any number below 0.666 -> floor to 1
    // 0.999 * 3 = 2.997 -> any number below 0.999 -> floor to 2
}

function playRound(playerSelection, csel) {
    // csel lower case
    psel = playerSelection.toLowerCase()

    // rock scissors w
    // rock paper l      

    // paper rock w
    // paper scissors l
    
    // scissors paper w
    // scissors rock l

    if (psel == csel) return "It's a Draw!";            // draw

    if (psel == "rock" && csel == "scissors") {         // rock
        return "You Win!";
    } else if (psel == "rock" && csel == "paper") {
        return "You Lose!";

    } else if (psel == "paper" && csel == "rock") {     // paper
        return "You Win!"
    } else if (psel == "paper" && csel == "scissors") {
        return "You Lose!"

    } else if (psel == "scissors" && csel == "paper") { // scissors
        return "You Win!";
    } else if (psel == "scissors" && csel == "rock") {
        return "You Lose!";
    }

}

function playerPlay() {
    return prompt("Choose Rock, Paper, or Scissors.");
}

function game() {
    round = 5;

    while (round > 0) {
        result = playRound(playerPlay(), computerPlay());     // plays a round
        console.log(result);
        round--                         // decrement
    }
    
}

game();