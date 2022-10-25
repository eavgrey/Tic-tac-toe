"use strict"

let cells = document.querySelectorAll ('.cell')
let playerOne = document.getElementById('player-one')
let playerTwo = document.getElementById('player-two')
let sign = 'cross'
let result = document.querySelector('.result')

let cellOne = document.querySelector('.cell-one')
let cellTwo = document.querySelector('.cell-two')
let cellThree = document.querySelector('.cell-three')
let cellFour = document.querySelector('.cell-four')
let cellFive= document.querySelector('.cell-five')
let cellSix = document.querySelector('.cell-six')
let cellSeven = document.querySelector('.cell-seven')
let cellEight = document.querySelector('.cell-eight')
let cellNine = document.querySelector('.cell-nine')

let again = document.querySelector('.again')
let restart = document.querySelector('.reset')

let counterOne = 0
let counterTwo = 0

let playerOneScore =  document.querySelector('.player-one-score')
let playerTwoScore =  document.querySelector('.player-two-score')

let playerX = ` <i class="icon fa-solid fa-5x fa-xmark"></i> `
let playerO = ` <i class=" icon fa-regular fa-4x fa-circle"></i> `

cells.forEach(cell=> {
    cell.addEventListener('click', ()=> {
      if(sign ==='cross'){
        playerOne.style.backgroundColor='#14bdac'
        playerOne.style.color = 'white'
        playerTwo.style.backgroundColor='white'
        playerTwo.style.color = '#298077'
  
        cell.innerHTML = playerX
        sign ='circle'
     } else if (sign ==='circle'){
        playerTwo.style.backgroundColor='#14bdac'
        playerTwo.style.color = 'white'
        playerOne.style.backgroundColor='white'
        playerOne.style.color = '#298077'
   
        cell.innerHTML = playerO
     
       sign = 'cross'
      }
      getWinner()
    })

})

function gameStop(){

}

function clear(){
  cells.forEach(cell =>{
  cell.innerHTML = ''
  })
  result.innerHTML = ''
    playerOneScore.innerHTML = counterOne
    playerTwoScore.innerHTML = counterTwo
}

function reset(){
  counterOne = 0
  counterTwo = 0
  playerOneScore.innerHTML = 0
  playerTwoScore.innerHTML = 0
} 

again.addEventListener('click', clear)
restart.addEventListener('click', reset)

function getWinner(){
  if((cellOne.innerHTML === playerX && cellTwo.innerHTML === playerX && cellThree.innerHTML === playerX)||
  (cellFour.innerHTML === playerX && cellFive.innerHTML === playerX && cellSix.innerHTML === playerX)||
  (cellSeven.innerHTML === playerX && cellEight.innerHTML === playerX && cellNine.innerHTML === playerX)||
  (cellOne.innerHTML === playerX && cellFour.innerHTML === playerX && cellSeven.innerHTML === playerX)||
  (cellTwo.innerHTML === playerX && cellFive.innerHTML === playerX && cellEight.innerHTML === playerX)||
  (cellThree.innerHTML === playerX && cellSix.innerHTML === playerX && cellNine.innerHTML === playerX)||
  (cellOne.innerHTML === playerX && cellFive.innerHTML === playerX && cellNine.innerHTML === playerX)||
  (cellThree.innerHTML === playerX && cellFive.innerHTML === playerX && cellSeven.innerHTML === playerX)){

  result.innerHTML = `Player 1 WIN `
  counterOne++

  } else if (
    (cellOne.innerHTML === playerO && cellTwo.innerHTML === playerO && cellThree.innerHTML === playerO)||
    (cellFour.innerHTML === playerO && cellFive.innerHTML === playerO && cellSix.innerHTML === playerO)||
    (cellSeven.innerHTML === playerO && cellEight.innerHTML === playerO && cellNine.innerHTML === playerO)||
    (cellOne.innerHTML === playerO && cellFour.innerHTML === playerO && cellSeven.innerHTML === playerO)||
    (cellTwo.innerHTML === playerO && cellFive.innerHTML === playerO && cellEight.innerHTML === playerO)||
    (cellThree.innerHTML === playerO && cellSix.innerHTML === playerO && cellNine.innerHTML === playerO)||
    (cellOne.innerHTML === playerO && cellFive.innerHTML === playerO && cellNine.innerHTML === playerO)||
    (cellThree.innerHTML === playerO && cellFive.innerHTML === playerO && cellSeven.innerHTML === playerO)
  ){
    result.innerHTML = `Player 2 WIN `
    counterTwo++
  }
 
  }

