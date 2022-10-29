"use strict";

const cells = document.querySelectorAll(".cell");
const playerOne = document.getElementById("player-one");
const playerTwo = document.getElementById("player-two");
const result = document.getElementById("result");

const again = document.getElementById("again");
const restart = document.getElementById("reset");

const playerOneScore = document.getElementById("player-one-score");
const playerTwoScore = document.getElementById("player-two-score");

const iconX = '<i class="icon fa-solid fa-5x fa-xmark"></i>';
const iconO = '<i class="icon fa-regular fa-4x fa-circle"></i>';

let currentSign = "cross";
let counterOne = 0;
let counterTwo = 0;
let isWin = false;

const board = [
  null, null, null, 
  null, null, null, 
  null, null, null
]

function updateBoard() {
  cells.forEach((cell, index) => {
    switch (board[index]) {
      case 'cross':
        cell.innerHTML = iconX
        break;
      case 'circle':
        cell.innerHTML = iconO
        break;
      default:
        cell.innerHTML = ''
        break;
    }
  })
}

function putSign(index) {
  if (board[index]) {
    return;
  }
  if (isWin) {
    return;
  } 
  
  board[index] = currentSign
  if (currentSign === "cross") {
    playerOne.classList.remove("active");
    playerTwo.classList.add("active");

    currentSign = "circle";
  } else if (currentSign === "circle") {
    playerOne.classList.add("active");
    playerTwo.classList.remove("active");

    currentSign = "cross";
  }

  getWinner();

  updateBoard()
}

function playAgain() {
  board.fill(null);
  updateBoard();

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

function checkSign(sign) {
    return (
      (board[0] === sign && board[0] === board[1] && board[1] === board[2]) ||
      (board[3] === sign && board[3] === board[4] && board[4] === board[5]) ||
      (board[6] === sign && board[6] === board[7] && board[7] === board[8]) ||
      (board[0] === sign && board[0] === board[3] && board[3] === board[6]) ||
      (board[1] === sign && board[1] === board[4] && board[4] === board[7]) ||
      (board[2] === sign && board[2] === board[5] && board[5] === board[8]) ||
      (board[0] === sign && board[0] === board[4] && board[4] === board[8]) ||
      (board[2] === sign && board[2] === board[4] && board[4] === board[6]) 
    )
}

function getWinner() {
  if (checkSign('cross')) {
    isWin = true;
    result.innerHTML = 'Player 1 WIN';
    counterOne++;
  } else if (checkSign('circle')) {
    isWin = true;
    result.innerHTML = 'Player 2 WIN';
    counterTwo++;
  } else if (board.every(x => x !== null)) {
    result.innerHTML = 'Tie';
  }
}

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    putSign(index)

    const computerIndexes = [];
    board.forEach((x, i) => {
      if (x === null) {
        computerIndexes.push(i);
      }
    })
    const computerIndex = computerIndexes[Math.floor(Math.random() * computerIndexes.length)]

    putSign(computerIndex)
  });
});