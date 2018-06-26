'use strict'

function main() {

  var startButton;
  var container;
  var body = document.body;


  function buildSplash() {

    var splashScreenHTML = `<div class="startScreen container">
    <div class="instructions">
      <h2>Repeat the Word</h2>
      <ul>
        <li>Capital letters matter</li>
        <li>The word to repeat disappears when the timer reaches 0, and you get another 10 seconds to enter the word</li>
        <li>Once you start typing, the timer starts and the word to repeat disappears</li>
      </ul>
    </div>
    <div class="btn-start">
      <button>eNteR CHaLlenGe</button>
    </div>
  </div>`

    container = document.getElementById('game-container');
    container.innerHTML = splashScreenHTML;


    // body.innerHTML = splashScreenHTML;

    startButton = document.querySelector('.btn-start');
    startButton.addEventListener('click', handleStartClick);
  }

  function handleStartClick() {
    startButton.removeEventListener('click', handleStartClick);
    startButton.remove();
    buildGame();
  }

  function buildGame() {
    var gameScreenHTML = `<div class="in-game">
    <div id="timer">
    <p id="timer-count">00:10</p>
    </div>
    <div id="btn-display-word">
    <button>Let's start</buttton>
    </div>

     <div id="display-word">
       <p id="random-word"></p>
     </div>
     <div class="input-value">
       <input type="text" id="input-form">
     </div>
   </div>`;
    container.innerHTML = gameScreenHTML;
    var playBtn = document.getElementById('btn-display-word');
    playBtn.addEventListener('click', handlePlayClick)
    window.playBtn2 = playBtn
  }

  function handlePlayClick() {
    // game = new Game(gameScreenHTML, endGame);
    playBtn2.removeEventListener('click', handlePlayClick);
    playBtn2.remove();
    game();
    secondsTimer();
  }

  buildSplash();

}

window.addEventListener('load', main)







  // var container = document.getElementById('game-container');
  // container.innerHTML = splashScreenHTML;

  // var body = document.body;
  // var game = document.querySelector('.game');
  // game.innerHTML = splashScreenHTML;
  // // var splashContainer = document.createElement('div');
  // body.appendChild('splashScreenHTML');
  // var startButton = body.querySelector('button');

  // startButton.addEventListener('click', handleStartClick);
  // }