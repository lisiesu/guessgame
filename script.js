'use strict';

let secretNumber = Math.trunc(Math.random() * 20) +1 ;
let score = 20;
let highscore = 0;
const guessBlock = document.querySelector('.guess');
const num = document.querySelector('.number');
const check = document.querySelector('.check');
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

//When there is no input number
    if(!guess){
       displayMessage("⛔Sem numero!");

//Wen player wins
    } else if (guess === secretNumber){
        displayMessage('🎉 Acertou Mozinho!! Parabens!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';
        guessBlock.style.display = 'none';
        check.style.display = 'none';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
//When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1){
            displayMessage(guess > secretNumber ? "📈Muito Alto!" : '📉Muito Baixo!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💣 You lose!');
            document.querySelector('.score').textContent = 0;
        }
    }               
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) +1 ;
    displayMessage('Comece a advinhar...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    guessBlock.style.display = 'block';
    check.style.display = 'block';
});

