'use strict'

function Game() {
  this.time = 9;
  this.word = "";
  this.input = "";
  this.words = ['KiwI', 'AppLE', 'oraNgE', 'BAnaNa', 'piNEaPPle', 'pUmpKIN', 'CoCONut', 'APRicot', 'ManGO'];
  this.intervalId = 0;
  this.isEnded = false;
  this.start();
}

Game.prototype.start = function () {
  this.getRandomWord();
  this.secondsTimer();

}


Game.prototype.getRandomWord = function () {
  var wordContainer = document.querySelector('#random-word p');
  var randomWord = this.words[Math.floor(Math.random() * this.words.length)];
  wordContainer.innerText = randomWord;
}


Game.prototype.clearWord = function () {
  var self = this;
  var wordContainer = document.querySelector('#random-word p');
  window.setTimeout(function () {
    wordContainer.classList.add('disabled');
  }, 10000);
}

// function clearWord() {
//   var self = this;
//   var wordContainer = document.querySelector('.toggle-remove');
//   window.setTimeout(function () {
//     wordContainer.removeChild('#random-word');
//   }, 2000);
// }







Game.prototype.inputWord = function () {
  var self = this;
  var input = document.querySelector('.input-value');
  input.classList.remove('disabled');
  var answerTimer = 10;
  var intervalId = setInterval(function () {
    var secondsTimer = document.getElementById('timer-count').innerText = answerTimer;
    answerTimer -= 1;
    if (answerTimer < 0) {
      clearInterval(intervalId);
      this.isEnded = true;
    }
  }, 1000)
}

Game.prototype.ifCorrect = function () {
  var self = this;
  var input = document.querySelector('input').value;
  var ranWord = document.querySelector('#random-word p').innerText;

  if (Object.is(input, ranWord)) {
    var appendTo = document.querySelector('.lastDiv');
    var newDiv = document.createElement('div');
    var newTextNode = document.createTextNode('You are correct!');
    newDiv.appendChild(newTextNode);
    appendTo.appendChild(newDiv);
    window.setTimeout(function () {
      //restart game
    }, 2000);
    console.log(true)

  } else {
    var appendTo1 = document.querySelector('.lastDiv');
    var newDiv2 = document.createElement('div');
    var newTextNode2 = document.createTextNode('You are Incorrect!');
    newDiv2.appendChild(newTextNode2);
    appendTo1.appendChild(newDiv2);
    window.setTimeout(function () {
      self.isEnded = true;
    }, 2000);
    console.log(false)
  }
}

Game.prototype.anotherWord = function () {
  var self = this;
  self.start();
}

Game.prototype.secondsTimer = function () {
  // time = 9;
  var self = this
  this.intervalId = setInterval(function () {
    var secondsTimer = document.getElementById('timer-count').innerText = self.time;
    self.time -= 1;
    if (self.time < 0) {
      clearInterval(self.intervalId);
      self.time = 9
      self.inputWord();
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







