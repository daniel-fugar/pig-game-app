'use strict';

const newGame = document.querySelector('.btn--new');
let rollDice = document.querySelector('.btn--roll');
let hold = document.querySelector('.btn--hold');

let playerOneScore = 0;
let playerTwoScore = 0;

const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');

let currOne = 0;
let currTwo = 0;
let flag = true;

let playing = true;

rollDice.addEventListener('click', () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    document.querySelector('.dice').setAttribute('src', `dice-${dice}.png`);
    document.querySelector('.dice').style.visibility = 'visible';
    
    if(dice === 1) {
      if(flag) {
        currOne = 0;
        document.querySelector('#current--0').textContent = 0;
      }
      else {
        currTwo = 0;
        document.querySelector('#current--1').textContent = 0;
      }
  
      switchPlayers();
    }
    else {
      if(flag) {
        currOne += dice;
        document.querySelector('#current--0').textContent = currOne;
      }
      else {
        currTwo += dice;
        document.querySelector('#current--1').textContent = currTwo;
      }
    } 
  }

});

hold.addEventListener('click', () => {
  if (playing) {

    if(flag) {
      playerOneScore += currOne;
      document.querySelector('#score--0').textContent = playerOneScore;
      
      currOne = 0;
      document.querySelector('#current--0').textContent = currOne;
    } 
    else {
      playerTwoScore += currTwo;
      document.querySelector('#score--1').textContent = playerTwoScore;
      
      currTwo = 0;
      document.querySelector('#current--1').textContent = currTwo;
    } 
    
    
    if(playerOneScore >= 100) {
      playerOne.classList.add('player--winner');
      document.querySelector('.dice').style.visibility = 'hidden';
      playing = false;
    }
    else if(playerTwoScore >= 100) {
      playerTwo.classList.add('player--winner');
      document.querySelector('.dice').style.visibility = 'hidden';
      playing = false;
    }
    else {
      switchPlayers();
    }

  }


});


newGame.addEventListener('click', () => {
  document.querySelector('.dice').style.visibility = 'hidden';
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;

  currOne = 0;
  currTwo = 0;
  playerOneScore = 0;
  playerTwoScore = 0;

  playerOne.classList.remove('player--winner');
  playerTwo.classList.remove('player--winner');
  playing = true;

  if(!flag) {
    switchPlayers();
  }
})

function switchPlayers() {
  if(playerOne.classList.contains('player--active')) {
    playerOne.classList.remove('player--active');
    playerTwo.classList.add('player--active');
  }
  else {
    playerTwo.classList.remove('player--active');
    playerOne.classList.add('player--active');
  }
  
  if(flag) flag = false;
  else flag = true;
}