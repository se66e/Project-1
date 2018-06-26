
// function correctWord() {
//   if (inputValue = word) {
//     nextWord();
//   } else if (inputValue != showWord) {
//     restartScreen();
//   }
// }

// function nextWord() {

// }

// var inputValue = document.getElementById('input-form').value;


function game() {

  var word = document.getElementById('random-word');
  var inputValue = document.getElementById('input-form');
  getRandomWord();

  function getRandomWord() {
    var getWord = words[Math.floor(Math.random() * words.length)];
    word.innerText = getWord;
  }

  // function rightWord () {
  //   if (getWord = inputValue) {
  //     nextWord();
  //   }
  // }

}

function secondsTimer() {
  var time = 9;
  var timerCount = setInterval(function () {
    var secondsTimer = document.getElementById('timer-count').innerText = '00:' + time;
    time--;
    if (time < 0) {
      clearInterval(timerCount);
    }
  }, 1000)
}

window.addEventListener('load', game)
