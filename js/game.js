'use strict'

var time;

function Game() {



}

Game.prototype.start = function () {
  //clear screen
}




Game.prototype.getRandomWord = function () {
  var word = document.querySelector('#random-word p');
  var getWord = words[Math.floor(Math.random() * words.length)];
  word.innerText = getWord;
  return getWord;
}

Game.prototype.secondsTimer = function () {
  time = 9;
  var timerCount = setInterval(function () {
    var secondsTimer = document.getElementById('timer-count').innerText = '00:' + time;
    time--;
    if (time < 0) {
      clearInterval(timerCount);
    }
  }, 1000)
}




// function nextWord 

