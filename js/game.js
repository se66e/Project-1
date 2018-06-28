

'use strict'

function Game(cb) {
  this.callback = cb
  this.time = 9;
  this.answerTimer = 10;
  this.word = "";
  this.input = "";
  this.ranWord = "";
  this.words = ['AppLE', 'oraNgE', 'BAnaNa', 'piNEaPPle', 'pUmpKIN', 'CoCONut', 'APRicot', 'clEmeNTine', 'GRApefRuiT', 'PaPayA', 'rhUbARb', 'raSbERry', 'stRaWBErRy', 'WatERMelOn', 'AvoCAdO', 'bLUebErRy', 'kIwiFRuiT'];
  this.intervalId = 0;
  this.intervalId2 = 0;
  this.score = 0;
  this.scoreNode = 0;
  this.isEnded = false;
  this.start();

}

Game.prototype.checkIfEnded = function () {
  var self = this;
  if (self.isEnded === true) {
    clearInterval(self.intervalId);
    self.callback();
  }
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

Game.prototype.inputWord = function () {
  var self = this;
  var input = document.querySelector('.input-value');
  input.classList.remove('disabled');
  var answerTimer = 10;
  self.intervalId2 = setInterval(function () {
    var inputTimer = document.getElementById('timer-count').innerText = answerTimer;
    answerTimer -= 1;
    if (answerTimer < 0) {
      clearInterval(self.intervalId2);
      self.isEnded = true;
      self.checkIfEnded();
      self.finalScore();
    }
  }, 1000)
}

Game.prototype.ifCorrect = function () {
  var self = this;
  var input = document.querySelector('input').value;
  var ranWord = document.querySelector('#random-word p').innerText;

  if (Object.is(input, ranWord)) {
    self.raiseScore();
    var appendTo = document.querySelector('.lastDiv');
    var newDiv = document.createElement('div');
    var newTextNode = document.createTextNode('You are correct!');
    newDiv.appendChild(newTextNode);
    appendTo.appendChild(newDiv);
    window.setTimeout(function () {
      appendTo.removeChild(newDiv);
      var input = document.querySelector('.input-value');
      input.classList.add('disabled');
      var wordContainer = document.querySelector('#random-word p');
      wordContainer.classList.remove('disabled');
      self.start();
      clearInterval(self.intervalId2);
    }, 2000);
    console.log(true)
  }
  if (Object.is(input, ranWord)) {
    window.setTimeout(function () {
      var wordContainer = document.querySelector('#random-word p');
      wordContainer.classList.add('disabled');
    }, 12000)

  } else {
    var appendTo1 = document.querySelector('.lastDiv');
    var newDiv2 = document.createElement('section');
    var newTextNode2 = document.createTextNode('You are Incorrect!');
    newDiv2.appendChild(newTextNode2);
    appendTo1.appendChild(newDiv2);
    window.setTimeout(function () {
      clearInterval(self.intervalId2);
      appendTo1.removeChild(newDiv2);
      self.isEnded = true;
      self.checkIfEnded();
      self.finalScore();
    }, 2000);
    console.log(false);
  }
}
Game.prototype.secondsTimer = function () {
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

Game.prototype.raiseScore = function () {
  var self = this;
  self.scoreNode = document.querySelector('.score');
  self.score++;
  self.scoreNode.innerText = self.score;
}

Game.prototype.finalScore = function () {
  var self = this;
  var scoreFinal = document.querySelector('.final-score')
  scoreFinal.innerText = self.score;
}