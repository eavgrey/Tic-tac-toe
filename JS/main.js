"use strict";

const cells = document.querySelectorAll(".cell");
const iconOne = document.getElementById("player-one");
const playerTwo = document.getElementById("player-two");
const result = document.getElementById("result");

const again = document.getElementById("again");
const restart = document.getElementById("reset");

const iconOneScore = document.getElementById("player-one-score");
const playerTwoScore = document.getElementById("player-two-score");

const iconX = '<i class="icon fa-solid fa-5x fa-xmark"></i>';
const iconO = '<i class=" icon fa-regular fa-4x fa-circle"></i>';

let sign = "cross";
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

function putSign(event) {
  const index = +event.currentTarget.dataset.index;

  if (board[index]) {
    return;
  }
  if (isWin) {
    return;
  } 
  
  board[index] = sign
  if (sign === "cross") {
    iconOne.classList.remove("active");
    playerTwo.classList.add("active");

    sign = "circle";
  } else if (sign === "circle") {
    iconOne.classList.add("active");
    playerTwo.classList.remove("active");

    sign = "cross";
  }

  getWinner();

  updateBoard()
}

cells.forEach((cell) => {
  cell.addEventListener("click", putSign);
});

function playAgain() {
  board.fill(null);
  updateBoard();

  isWin = false;
  result.innerHTML = "";
  iconOneScore.innerHTML = counterOne;
  playerTwoScore.innerHTML = counterTwo;
}

function reset() {
  counterOne = 0;
  counterTwo = 0;
  iconOneScore.innerHTML = 0;
  playerTwoScore.innerHTML = 0;
}

again.addEventListener("click", playAgain);
restart.addEventListener("click", reset);

function getWinner() {
  if (
    (board[0] === 'cross' && board[0] === board[1] && board[1] === board[2]) ||
    (board[3] === 'cross' && board[3] === board[4] && board[4] === board[5]) ||
    (board[6] === 'cross' && board[6] === board[7] && board[7] === board[8]) ||
    (board[0] === 'cross' && board[0] === board[3] && board[3] === board[6]) ||
    (board[1] === 'cross' && board[1] === board[4] && board[4] === board[7]) ||
    (board[2] === 'cross' && board[2] === board[5] && board[5] === board[8]) ||
    (board[0] === 'cross' && board[0] === board[4] && board[4] === board[8]) ||
    (board[2] === 'cross' && board[2] === board[4] && board[4] === board[6]) 
  ) {
    isWin = true;
    result.innerHTML = 'Player 1 WIN';
    counterOne++;
  } else if (
    (board[0] === 'circle' && board[0] === board[1] && board[1] === board[2]) ||
    (board[3] === 'circle' && board[3] === board[4] && board[4] === board[5]) ||
    (board[6] === 'circle' && board[6] === board[7] && board[7] === board[8]) ||
    (board[0] === 'circle' && board[0] === board[3] && board[3] === board[6]) ||
    (board[1] === 'circle' && board[1] === board[4] && board[4] === board[7]) ||
    (board[2] === 'circle' && board[2] === board[5] && board[5] === board[8]) ||
    (board[0] === 'circle' && board[0] === board[4] && board[4] === board[8]) ||
    (board[2] === 'circle' && board[2] === board[4] && board[4] === board[6]) 
  ) {
    isWin = true;
    result.innerHTML = 'Player 2 WIN';
    counterTwo++;
  } else if (board.every(x => x !== null)) {
    result.innerHTML = 'Tie';
  }
}
