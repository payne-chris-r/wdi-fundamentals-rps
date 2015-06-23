////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return true;
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    if(move == '')
    {
      return getInput();
    }
    else
    {
      return move;
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    if(move == '')
    {
      return move;
    }
    else
    {
      return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    if(playerMove === computerMove)
    {
      return tie;
    }
    else
    {
      if(playerMove === 'rock' && computerMove === 'paper' ||
        playerMove === 'paper' && computerMove === 'scissors' ||
        playerMove === 'scissors' && computerMove === 'rock')
      {
        winner = 'computer';
      }
      else
      {
        winner = 'player';
      }
    }
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins !== 5 || computerWins !== 5)
    {

      if(getWinner(getPlayerMove(getInput()),getComputerMove(randomPlay())) ===
        'player')
      {
        playerWins++;
      }
      else
      {
        computerWins++;
      }

    }
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

