'use strict'

function main() {

  var startButton;
  var container;
  var body = document.body;
  var game;
  var playBtn;
  var tryBtn;
  var gameScreenHTML;
  var restartBtn;

  // ------------ SPLASH SCREEN ------------ //  

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
    startButton = document.querySelector('.btn-start');
    startButton.addEventListener('click', handleStartClick);
  }

  function handleStartClick() {
    startButton.removeEventListener('click', handleStartClick);
    startButton.remove();
    buildGame();
  }

  // ------------ GAME SCREEN ------------ //

  function buildGame() {
    gameScreenHTML = `<div class="in-game">
    <div id="timer">
    <p id="timer-count">10</p>
    </div>
    <div id="random-word" class="hide">
       <p></p>
    </div>
    <div class="append-to">
    </div>
     <div class="input-value disabled">
       <input type="text" id="input-form">
       <div id="submit">
        <button>try it</button>
        <div class="lastDiv">
        </div>
        <div class="score-box">
        <h4>Your score is:</h4>
        <div class="score">
        0
        </div>
        </div>
       </div>
     </div>
   </div>`;
    container.innerHTML = gameScreenHTML;
    playGame();
  }

  function playGame() {
    game = new Game(endGame);
    // word appears
    // timer starts
    // after 10 seconds
    // word disapears
    // listning keyboard keys
    // starts timer to type word
    // check if written word is correct
    tryBtn = document.getElementById('submit');
    tryBtn.addEventListener('click', handleTryClick);
    game.clearWord();
  }

  function handleTryClick() {
    game.ifCorrect();
  }


  function endGame() {
    console.log('ended')
    // if (game.isEnded = true) {
    // container.innerHTML = null;
    game = null;
    buildRestartGame();
    // }

    // ------------ RESTART SCREEN ------------ //

  }
  function buildRestartGame() {
    container.innerHTML = `<div class="restart">
    <div class="restart-button">
    <button id="restart-game">TrY aGaIn</button>
    </div>
    <div class="score-box-no2">
    <h4>You scored:</h4>
    </div>
    <div class="score">
    0
    </div>
    </div>`

    restartBtn = document.querySelector('#restart-game');
    restartBtn.addEventListener('click', handleRestartClick);
  }

  function handleRestartClick() {
    restartBtn.removeEventListener('click', handleRestartClick);
    restartBtn.remove();
    container.innerHTML = null;
    game = buildSplash();
  }

  buildSplash();

}

window.addEventListener('load', main)
