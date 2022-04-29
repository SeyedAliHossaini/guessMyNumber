'use strict';
const inputEl = document.querySelector('.guess');
const checkEl = document.querySelector('.check');
const numberEl = document.querySelector('.number');
const againEl = document.querySelector('.again');
const massageEl = document.querySelector('.message');
let scoreEl = document.querySelector('.score');
let highScoreEl = document.querySelector('.highscore');
const background = document.querySelector('body');
let score = 20;
let highScore = 0;
const misteryNumber = Math.trunc(Math.random() * 20);
checkEl.addEventListener('click', function () {
  const guess = Number(inputEl.value);
  if (guess) {
    if (score > 0) {
      if (guess === misteryNumber) {
        massageEl.textContent = 'Correct Number!';
        numberEl.textContent = guess;
        background.classList.add('correct');
        if (score > highScore) highScore = score;
        highScoreEl.textContent = highScore;
        game = false;
      } else if (guess < misteryNumber) {
        massageEl.textContent = '📉 Too low!';
        score--;
        scoreEl.textContent = score;
      } else if (guess > misteryNumber) {
        massageEl.textContent = '📈 Too high!';
        score--;
        scoreEl.textContent = score;
      }
    } else massageEl.textContent = ' Game Over !!!';
  } else massageEl.textContent = 'Enter Number !!!';
});
againEl.addEventListener('click', function () {
  massageEl.textContent = 'Start guessing...';
  numberEl.textContent = '?';
  inputEl.value = ' ';
  score = 20;
  scoreEl.textContent = 20;
  background.classList.remove('correct');
  misteryNumber = Math.trunc(Math.random() * 20);
});
