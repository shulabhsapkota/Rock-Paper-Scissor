const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const userChoice = document.querySelector(".user");
const compChoice = document.querySelector(".computer");
const winner = document.querySelector(".winner h2");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIdx = Math.floor(Math.random() * 3);
  return choices[randomIdx];
}

function playGame(userMove) {
  const computerMove = getComputerChoice();

  userChoice.innerHTML = `Your choice : ${userMove}`;
  compChoice.innerHTML = `Computer choice : ${computerMove}`;

  if (userMove === computerMove) {
    winner.innerHTML = "It's a Tie!";
  } else {
    winner.innerHTML = "Round Completed";
  }
}

rock.addEventListener("click", () => playGame("rock"));
paper.addEventListener("click", () => playGame("paper"));
scissors.addEventListener("click", () => playGame("scissors"));