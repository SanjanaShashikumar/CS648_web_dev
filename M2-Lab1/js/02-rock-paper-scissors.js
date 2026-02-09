function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const idx = Math.floor(Math.random() * 3); // 0, 1, or 2
  return options[idx];
}

function decideWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "tie";

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    return "user";
  }
  return "computer";
}

function playRockPaperScissors() {
  const input = prompt("Choose rock, paper, or scissors:");
  if (input === null) {
    alert("Game cancelled.");
    return;
  }

  const userChoice = input.trim().toLowerCase();
  const valid = ["rock", "paper", "scissors"];

  if (!valid.includes(userChoice)) {
    alert("Invalid choice. Please enter rock, paper, or scissors.");
    return;
  }

  const computerChoice = getComputerChoice();
  const winner = decideWinner(userChoice, computerChoice);

  if (winner === "tie") {
    alert(`Tie! You both chose ${userChoice}.`);
  } else if (winner === "user") {
    alert(`You win! You chose ${userChoice}, computer chose ${computerChoice}.`);
  } else {
    alert(`Computer wins! You chose ${userChoice}, computer chose ${computerChoice}.`);
  }
}

// Hook up the button in index.html
window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("playBtn");
  if (btn) btn.addEventListener("click", playRockPaperScissors);
});
