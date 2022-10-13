'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
let totalScore = 0;
let translation = false;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const modify = function () {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
};

const neutral = function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When the guess is null
  if (!guess) {
    displayMessage('No Number');

    //When the guess is Correct
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    modify();
    if (highScore < score) {
      document.querySelector('.highscore').textContent = highScore = score;
    } else if (highScore >= score) {
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.totalScore').textContent = totalScore += score;

    //When the guess is low or high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      if (translation == false) {
        displayMessage(guess > secretNumber ? '✈ Too high!' : '⚓ Too Low!');
      } else {
        displayMessage(
          guess > secretNumber ? '✈ Muito alto!' : '⚓ Muito baixo!'
        );
      }
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('⁉ You lost the game !');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  if (translation == false) {
    displayMessage('Start guessing...');
  } else {
    displayMessage('Comece a adivinhar');
  }

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  neutral();
});

document.querySelector('.language-img').addEventListener('click', function () {
  document.querySelector('h1').textContent = 'Adivinhe Meu Número';
  document.querySelector('.between').textContent = 'Entre 1 a 20';
  document.querySelector('.again').textContent = 'De Novo!';
  document.querySelector('.message').textContent = 'Comece a adivinhar...';
  translation = true;
});
