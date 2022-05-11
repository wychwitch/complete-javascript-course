'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const defaultScore = 20;

let score = defaultScore;

let highScore = 0;

let alive = true;

const changeMessage = function (text) {
  document.querySelector('.message').textContent = text;
};

const changeBG = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const initGame = function () {
  score = defaultScore;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  changeBG('#222');
  document.querySelector('.number').style.width = '15rem';
  changeMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  alive = true;
  console.log('started game');
};

initGame();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //make this into a switch statement

  if (alive) {
    switch (guess) {
      case 0:
        changeMessage('No Number!!');
        break;
      case secretNumber:
        changeBG('hsl(200 50% 50%)');
        document.querySelector('.number').style.width = '30rem';
        changeMessage('Correct!!!');
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
        break;
      default:
        if (score > 1) {
          changeMessage(guess > secretNumber ? 'Too High!!' : 'Too Low');
          score--;
        } else {
          changeMessage('you lost');
          document.querySelector('.number').textContent = ':(';
          alive = false;
          changeBG('red');
        }
        document.querySelector('.score').textContent = score;
        break;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => initGame());
