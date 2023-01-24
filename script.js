'use strict';

// document.querySelector('.gotten-answer').textContent= '🏄‍♂️correct scores!!!';

//reusable function

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
const highscore = 0;
// decralation

const displayMessage = function (message) {
  document.querySelector('.question-mark').textContent = message;
};
const checking = document.querySelector('.checking-link');

checking.addEventListener('click', () => {
  const userInput = Number(document.querySelector('.input').value);
  //    when no input is Entered
  if (!userInput) displayMessage('😕 No number');
  // when you guess correct answer
  else if (userInput === secretNumber) {
    document.querySelector('.question-mark').textContent = secretNumber;
    document.querySelector('.question-mark').style.width = '150px';
    document.querySelector('.question-mark').style.fontSize = '300%';
    document.body.style.background = '#555';

    document.querySelector('.gotten-answer').textContent = '🎉 Correct Answer!!!!';
    if (score > highscore) {
      document.querySelector('.span-high-score').textContent = score;
    }
  }

  //  when guess is to high
  else if (userInput !== secretNumber) {
    if (score > 1) {
      document.querySelector('.gotten-answer').textContent =
        userInput > secretNumber ? 'Too high' : 'Too low';
      score--;
      document.querySelector('.span-class').textContent = score;
    } else {
      document.querySelector('.gotten-answer').textContent = 'You lost game';
      document.querySelector('.span-class').textContent = 0;
    }
  }
});

// renewing the game

const renew = document.querySelector('.renew-game');
renew.addEventListener('click', () => {
  score = 20;
  document.querySelector('.span-class').textContent = score;
  displayMessage('start quessing');
  document.querySelector('.input').value = '';
  document.querySelector('.question-mark').textContent = '?';
  document.querySelector('.question-mark').style.width = '80px';
  document.querySelector('.question-mark').style.fontSize = '200%';
  document.body.style.background = 'linear-gradient(45deg,#c2bfbf, #4e4)';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
