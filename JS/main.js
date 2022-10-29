"use strict";

const cells = document.querySelectorAll(".cell");
const playerOne = document.getElementById("player-one");
const playerTwo = document.getElementById("player-two");
const result = document.getElementById("result");

const cellOne = document.getElementById("cell-one");
const cellTwo = document.getElementById("cell-two");
const cellThree = document.getElementById("cell-three");
const cellFour = document.getElementById("cell-four");
const cellFive = document.getElementById("cell-five");
const cellSix = document.getElementById("cell-six");
const cellSeven = document.getElementById("cell-seven");
const cellEight = document.getElementById("cell-eight");
const cellNine = document.getElementById("cell-nine");

const again = document.getElementById("again");
const restart = document.getElementById("reset");

const playerOneScore = document.getElementById("player-one-score");
const playerTwoScore = document.getElementById("player-two-score");

const playerX = ` <i class="icon fa-solid fa-5x fa-xmark"></i> `;
const playerO = ` <i class=" icon fa-regular fa-4x fa-circle"></i> `;

let sign = "cross";
let counterOne = 0;
let counterTwo = 0;
let isWin = false;

function putSign(event) {
  const cell = event.currentTarget;

  if (cell.innerHTML !== "") {
    return;
  }
  if (isWin) {
    return;
  } else if (sign === "cross") {
    playerOne.classList.remove("active");
    playerTwo.classList.add("active");

    cell.innerHTML = playerX;
    sign = "circle";
  } else if (sign === "circle") {
    playerOne.classList.add("active");
    playerTwo.classList.remove("active");

    cell.innerHTML = playerO;
    sign = "cross";
  }
  getWinner();
}

cells.forEach((cell) => {
  cell.addEventListener("click", putSign);
});

function playAgain() {
  cells.forEach((cell) => {
    cell.innerHTML = "";
  });
  isWin = false;
  result.innerHTML = "";
  playerOneScore.innerHTML = counterOne;
  playerTwoScore.innerHTML = counterTwo;
}

function reset() {
  counterOne = 0;
  counterTwo = 0;
  playerOneScore.innerHTML = 0;
  playerTwoScore.innerHTML = 0;
}

again.addEventListener("click", playAgain);
restart.addEventListener("click", reset);

function getWinner() {
  if (
    (cellOne.innerHTML === playerX &&
      cellTwo.innerHTML === playerX &&
      cellThree.innerHTML === playerX) ||
    (cellFour.innerHTML === playerX &&
      cellFive.innerHTML === playerX &&
      cellSix.innerHTML === playerX) ||
    (cellSeven.innerHTML === playerX &&
      cellEight.innerHTML === playerX &&
      cellNine.innerHTML === playerX) ||
    (cellOne.innerHTML === playerX &&
      cellFour.innerHTML === playerX &&
      cellSeven.innerHTML === playerX) ||
    (cellTwo.innerHTML === playerX &&
      cellFive.innerHTML === playerX &&
      cellEight.innerHTML === playerX) ||
    (cellThree.innerHTML === playerX &&
      cellSix.innerHTML === playerX &&
      cellNine.innerHTML === playerX) ||
    (cellOne.innerHTML === playerX &&
      cellFive.innerHTML === playerX &&
      cellNine.innerHTML === playerX) ||
    (cellThree.innerHTML === playerX &&
      cellFive.innerHTML === playerX &&
      cellSeven.innerHTML === playerX)
  ) {
    isWin = true;
    result.innerHTML = `Player 1 WIN `;
    counterOne++;
  } else if (
    (cellOne.innerHTML === playerO &&
      cellTwo.innerHTML === playerO &&
      cellThree.innerHTML === playerO) ||
    (cellFour.innerHTML === playerO &&
      cellFive.innerHTML === playerO &&
      cellSix.innerHTML === playerO) ||
    (cellSeven.innerHTML === playerO &&
      cellEight.innerHTML === playerO &&
      cellNine.innerHTML === playerO) ||
    (cellOne.innerHTML === playerO &&
      cellFour.innerHTML === playerO &&
      cellSeven.innerHTML === playerO) ||
    (cellTwo.innerHTML === playerO &&
      cellFive.innerHTML === playerO &&
      cellEight.innerHTML === playerO) ||
    (cellThree.innerHTML === playerO &&
      cellSix.innerHTML === playerO &&
      cellNine.innerHTML === playerO) ||
    (cellOne.innerHTML === playerO &&
      cellFive.innerHTML === playerO &&
      cellNine.innerHTML === playerO) ||
    (cellThree.innerHTML === playerO &&
      cellFive.innerHTML === playerO &&
      cellSeven.innerHTML === playerO)
  ) {
    isWin = true;
    result.innerHTML = `Player 2 WIN `;
    counterTwo++;
  } else if (
    (cellOne.innerHTML == playerX || cellOne.innerHTML == playerO) &&
    (cellTwo.innerHTML == playerX || cellTwo.innerHTML == playerO) &&
    (cellThree.innerHTML == playerX || cellThree.innerHTML == playerO) &&
    (cellFour.innerHTML == playerX || cellFour.innerHTML == playerO) &&
    (cellFive.innerHTML == playerX || cellFive.innerHTML == playerO) &&
    (cellSix.innerHTML == playerX || cellSix.innerHTML == playerO) &&
    (cellSeven.innerHTML == playerX || cellSeven.innerHTML == playerO) &&
    (cellEight.innerHTML == playerX || cellEight.innerHTML == playerO) &&
    (cellNine.innerHTML == playerX || cellNine.innerHTML == playerO)
  ) {
    result.innerHTML = `Tie `;
  }
}
