'use strict'

function main() {

  var startButton;
  var container;
  var body = document.body;
  var game;
  var playBtn;
  var tryBtn;


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
    <p id="timer-count">10</p>
    </div>
    <div id="btn-display-word">
    <button>Let's start</buttton>
    </div>
    <div id="random-word" class="">
       <p></p>
    </div>
     <div class="input-value disabled">
       <input type="text" id="input-form">
       <div id="submit">
        <button>try it</button>
       </div>
     </div>
   </div>`;
    container.innerHTML = gameScreenHTML;
    playBtn = document.getElementById('btn-display-word');
    playBtn.addEventListener('click', handlePlayClick);
  }

  function handlePlayClick(event) {
    playBtn.removeEventListener('click', handlePlayClick);
    playBtn.remove();
    playGame();
  }

  function playGame() {
    // word appears
    // timer starts
    // after 10 seconds
    // word disapears
    // listning keyboard keys
    // starts timer to type word
    // check if written word is correct
    tryBtn = document.getElementById('submit');
    tryBtn.addEventListener('click', handleTryClick);
    game = new Game();
    game.getRandomWord();
    game.secondsTimer();
    game.start();
  }

  function handleTryClick() {
    checkIfCorrect();
  }

  function checkIfCorrect() {
    game.checkWord();
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
