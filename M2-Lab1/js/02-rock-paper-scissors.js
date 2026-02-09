
"use strict";

/**
 * Rock Paper Scissors
 * Phases:
 * 1) User choice via prompt
 * 2) Computer choice via random
 * 3) Conditional to determine winner
 */

function getUserChoice() {
  const input = prompt("Choose rock, paper, or scissors:").trim().toLowerCase();

  // Handle cancel or empty input
  if (!input) return null;

  if (input === "rock" || input === "paper" || input === "scissors") {
    return input;
  }

  return "invalid";
}

function getComputerChoice() {
  // 0, 1, or 2
  const rand = Math.floor(Math.random() * 3);

  // Convert numeric value to string
  if (rand === 0) return "rock";
  if (rand === 1) return "paper";
  return "scissors";
}

function determineWinner(user, computer) {
  if (user === computer) return "tie";

  // User wins cases:
  // rock beats scissors
  // scissors beats paper
  // paper beats rock
  const userWins =
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock");

  return userWins ? "user" : "computer";
}

function playRockPaperScissors() {
  const userChoice = getUserChoice();

  if (userChoice === null) {
    alert("Game canceled.");
    return;
  }

  if (userChoice === "invalid") {
    alert("Invalid choice. Please refresh and enter: rock, paper, or scissors.");
    return;
  }

  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice);

  if (winner === "tie") {
    alert(`Tie game! You chose ${userChoice} and the computer chose ${computerChoice}.`);
  } else if (winner === "user") {
    alert(`You win! You chose ${userChoice} and the computer chose ${computerChoice}.`);
  } else {
    alert(`Computer wins! You chose ${userChoice} and the computer chose ${computerChoice}.`);
  }
}

// Auto-run once when the script loads
playRockPaperScissors();
