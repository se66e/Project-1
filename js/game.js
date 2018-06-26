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
    var secondsTimer = document.getElementById('timer-count').innerText = time;
    time--;
    if (time < 0) {
      clearInterval(timerCount);
    }
  }, 1000)
}

Game.prototype.clearWord = function () {
  if (time <= 0) {
    document.querySelector('#random-word p').remove;
  }
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



// function nextWord 

