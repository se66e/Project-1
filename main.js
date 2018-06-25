'use strict'

function main() {

  var startButton;
  var container;
  var body = document.body;


  function buildSplash() {
    var self = this;

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

    var container = document.getElementById('game-container');
    container.innerHTML = splashScreenHTML;


    // body.innerHTML = splashScreenHTML;

    var startButton = document.querySelector('.btn-start');
    startButton.addEventListener('click', handleStartClick);
    window.startButton2 = startButton;
  }

  function handleStartClick() {
    startButton2.removeEventListener('click', handleStartClick);
    startButton2.remove();

    buildGame();
  }

  function buildGame() {
    var gameScreenHTML = `<div class="inGame">
     <div id="hardWord">
       <p></p>
     </div>
     <div class="inputValue">
       <input type="" id="inputForm">
     </div>
     <div class="displayWord">
       <p></p>
     </div>
   </div>`;
    container.innerHTML = gameScreenHTML;



    playGame();

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