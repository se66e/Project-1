'use strict'

function Game() {



}

Game.prototype.start = function () {
  //clear screen
}

Game.prototype.getRandomWord = function () {
  var getWord = words[Math.floor(Math.random() * words.length)];
  console.log(getWord);
  return getWord;
}


var word = document.querySelector('#random-word p').innerText;
var inputValue = document.querySelector('input').value;



Game.prototype.secondsTimer = function () {
  var time = 9;
  var timerCount = setInterval(function () {
    var secondsTimer = document.getElementById('timer-count').innerText = '00:' + time;
    time--;
    if (time < 0) {
      clearInterval(timerCount);
    }
  }, 1000)
}

// function rightWord () {
//   if (word = inputValue && time > 0) {
//     // nextWord ();
//   } else if (word != inputValue || time < 0) {
//     // restartScreen();
//   }
// }

// function nextWord 