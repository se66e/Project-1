'use strict'

var time;
var word;
var input;
function Game() {



}

Game.prototype.start = function () {
  //clear screen
}




Game.prototype.getRandomWord = function () {
  word = document.querySelector('#random-word p');
  var getWord = words[Math.floor(Math.random() * words.length)];
  word.innerText = getWord;
  clearWord();
  inputWord();
}

function clearWord() {
  window.setTimeout(function () {
    word.classList.add('disabled');
  }, 10000);
}

function inputWord() {
  input = document.querySelector('.disabled');
  window.setTimeout(function () {
    input.classList.remove('disabled');
  }, 10000);
}

function ifCorrect() {
  if (Object.is(input, ranWord)) {
    getRandomWord();
    inputWord();
    secondsTimer();
  } else {

  }
}

Game.prototype.secondsTimer = function () {
  time = 9;
  var timerCount = setInterval(function () {
    var secondsTimer = document.getElementById('timer-count').innerText = time;
    time--;
    if (time < 0) {
      clearInterval(timerCount);
    }
  }, 1000)
}

Game.prototype.checkWord = function () {
  var input = document.querySelector('input').value;
  var ranWord = document.querySelector('#random-word p').innerText;
  if (Object.is(input, ranWord)) {
    console.log(true);
    this.getRandomWord();

  } else {
    console.log(false)
  }
}







