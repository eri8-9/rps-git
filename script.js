'use strict';

// Computer selection
let computerPlay = function () {
  const names = ['Rock', 'Paper', 'Scissors'];
  return names[Math.floor(Math.random() * names.length)];
};

const playRound = function (playerSelection, computerSelection) {

  // My Code Game
  if (computerSelection === 'Rock' && playerSelection === 'rock') {
    return ("It's a tie 1");
  } else if (computerSelection === 'Rock' && playerSelection === 'paper') {
    ++playerScore;
    return 'You Win! Paper beats Rock';
  } else if (computerSelection === 'Rock' && playerSelection === 'scissors') {
    ++computerScore;
    return 'You lose! Rock beats Scissors';
  } else if (computerSelection === 'Paper' && playerSelection === 'rock') {
    ++computerScore;
    return 'You Lose! Paper beats Rock';
  } else if (computerSelection === 'Paper' && playerSelection === 'paper') {
    return "It's a tie 2";
  } else if (computerSelection === 'Paper' && playerSelection === 'scissors') {
    ++playerScore;
    return 'You Win! Scissors beats Paper';
  } else if (computerSelection === 'Scissors' && playerSelection === 'rock') {
    ++playerScore;
    return 'You Win! Rock beats Scissors';
  } else if (computerSelection === 'Scissors' && playerSelection === 'paper') {
    ++computerScore;
    return 'You Lose! Scissors beats Paper';
  } else if (computerSelection === 'Scissors' && playerSelection === 'scissors') {
    return "It's a tie 3";
  } else {
    return 'Something is wrong!';
  }

};

// Keep score.
let playerScore = 0;
let computerScore = 0;

// Write a new function called game.
let game = function () {

  // Use the previous function inside of this one to play 5 round game.
  for (let i = 0; i < 5; i++) {

    let playerSelection = prompt('Choose something');
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
  }

  // Reports a winner or loser at the end.
  if (playerScore > computerScore) {
    console.log('----- You Win the Match!! 😁-----');
  } else {
    console.log('------Computer Win------  😕');
  }
}

let rps = game();

