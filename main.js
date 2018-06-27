'use strict'

function main() {

  var startButton;
  var container;
  var body = document.body;
  var game;
  var playBtn;
  var tryBtn;

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


    // body.innerHTML = splashScreenHTML;

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
    var gameScreenHTML = `<div class="in-game">
    <div id="timer">
    <p id="timer-count">10</p>
    </div>
    <div class="toggle-remove">
    <div id="random-word" class="">
       <p></p>
    </div>
    </div>
     <div class="input-value disabled">
       <input type="text" id="input-form">
       <div id="submit">
        <button>try it</button>
        <div class="lastDiv">
        </div>
       </div>
     </div>
   </div>`;
    container.innerHTML = gameScreenHTML;
    playGame();
  }

  function playGame() {
    game = new Game();
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
    gameScreenHTML.remove();
    game = null;
    buildRestartGame();
  }

  function buildRestartGame() {
    var restartGameScreenHTML = `<div class="restart">
    <button id="restart-game">TrY aGaIn</button>
    </div>
    `
  }



  buildSplash();

}

window.addEventListener('load', main)
