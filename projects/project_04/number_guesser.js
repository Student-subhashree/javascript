let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField').value;
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prev_Guess = [];
let num_Guess = 1;
let play_Game = True;
if (play_Game){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
        
    })
}
function validateGuess(guess) {
    
}

function checkGuess(guess){

}

function displayGuess(guess){

}

function displayMsg(msg){

}

function newGame() {
    
}

function newGame() {
    
}
