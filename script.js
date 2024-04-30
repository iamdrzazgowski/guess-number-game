'use strict';

const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const messageField = document.querySelector('.message');
const number = document.querySelector('.number');
const scoreField = document.querySelector('.score');
const inputNumber = document.querySelector('.guess');
const highscoreNumber = document.querySelector('.highscore');

let currentScore = 20;
let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

const displayMessage = (message) => {
    messageField.textContent = message;
};

checkBtn.addEventListener('click', () => {
    const guess = Number(inputNumber.value);

    if (!guess) {
        displayMessage('⛔️ No number!');
    } else if (guess === secretNumber) {
        document.querySelector('body').style.backgroundColor = '#60b347';

        displayMessage('🎉 Correct Number!');

        if (currentScore > highscore) {
            highscore = currentScore;
            highscoreNumber.textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (currentScore > 1) {
            currentScore--;
            scoreField.textContent = currentScore;
            guess > secretNumber ? displayMessage('To high!') : displayMessage('To low!');
        } else {
            displayMessage('💥 You lost the game!');
            scoreField.textContent = '0';
        }
    }
});

againBtn.addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    displayMessage('Start guessing...');
    number.textContent = '?';
    currentScore = 20;
    scoreField.textContent = currentScore;
    inputNumber.value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});
