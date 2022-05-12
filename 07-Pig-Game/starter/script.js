'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let gameActive = true;

//Make a player obj if they dont
const updateCurrentScore = function (score = 0) {
  currentScore = score;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
};

const switchPlayer = function () {
  updateCurrentScore();
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
const addScore = function () {
  scores[activePlayer] += currentScore;
  currentScore = 0;
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  updateCurrentScore();
};

const init = function () {
  scores[(0, 0)] = 0;
  currentScore = 0;
  activePlayer = 0;
  gameActive = true;
  updateCurrentScore();
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  score0El.textContent = 0;
  score1El.textContent = 0;
};

const diceRoll = function () {
  if (gameActive) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    if (diceEl.classList.contains('hidden')) {
      diceEl.classList.remove('hidden');
    }
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      updateCurrentScore((currentScore += dice));
      if (scores[activePlayer] + currentScore >= 10) {
        gameActive = false;
        addScore();
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
      }
    } else {
      switchPlayer();
    }
  }
};

const buttonHold = function () {
  if (gameActive) {
    addScore();
    switchPlayer();
  }
};
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', diceRoll);
btnHold.addEventListener('click', buttonHold);

btnNew.addEventListener('click', init);
