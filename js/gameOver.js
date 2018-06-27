function Game(endGame) {

}



'use strict'

function game() {

  var word = document.getElementById('random-word');
  var inputValue = document.querySelector('input').value;
  console.log(inputValue);
  getRandomWord();

  var getWord;

  function getRandomWord() {
    getWord = words[Math.floor(Math.random() * words.length)];
    return getWord;
    console.log(getWord)
    // word.innerText = getWord;
  }
  word.innerText = getRandomWord();

  function rightWord() {
    if (getWord = inputValue) {
      nextQuestion();
    }
  }

}

function secondsTimer() {
  var time = 9;
  var timerCount = setInterval(function () {
    var secondsTimer = document.getElementById('timer-count').innerText = '00:' + time;
    time--;
    if (time < 0) {
      clearInterval(timerCount);
    }
  }, 1000)
}

window.addEventListener('load', game)


Game.prototype.clearWord = function () {
  if (time <= 0) {
    var ranWord = document.getElementById('random-word');
    ranWord.className += " disabled";
  }
}