"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let check = document.querySelector(".check");
check.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  // when no number is entered
  if (!guess) {
    displayMessage("😡 No Number");

    // when correct number is entered
  } else if (guess === number) {
    displayMessage("🎉 Correct Number");
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  // when number is wrong
  else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "👆Too High" : "👇 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You Lost The Game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// when the again button is clicked
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

// when number is too high
/* else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "👆Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You Lost The Game";
      document.querySelector(".score").textContent = 0;
    }

    // when number is too low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "👇 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You Lost The Game";
      document.querySelector(".score").textContent = 0;
    }
  } */
