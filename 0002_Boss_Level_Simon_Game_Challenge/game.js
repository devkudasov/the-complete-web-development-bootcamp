const COLORS = ['red', 'blue', 'green', 'yellow'];

let gamePattern = [];
let userPattern = [];
let level = 0;

$(document).keydown(function () {
  if (level === 0) {
    nextSequence();
  }
});

function nextSequence() {
  upgradeLevel();
  let randomColor = Math.floor(Math.random() * 4);
  const color = COLORS[randomColor];
  gamePattern.push(color);
  $(`#${color}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(color);
}

$('[type="button"]').click(function () {
  if (level === 0) {
    return;
  }

  const userChosenColour = $(this).attr('id');

  userPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userPattern.length - 1);
});

function playSound(color) {
  const sound = new Audio(`sounds/${color}.mp3`);
  sound.play();
}

function animatePress(color) {
  $(`#${color}`).addClass('pressed');
  setTimeout(() => {
    $(`#${color}`).removeClass('pressed');
  }, 100);
}

function upgradeLevel() {
  level++;
  $('#level-title').text(`Level ${level}`);
  userPattern = [];
}

function checkAnswer(index) {
  if (gamePattern[index] === userPattern[index]) {
    if (userPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    const sound = new Audio('sounds/wrong.mp3');
    sound.play();
    gameOver();
  }
}

function gameOver() {
  $('body').addClass('game-over');
  setTimeout(() => {
    $('body').removeClass('game-over');
  }, 200);
  $('#level-title').text('Game Over, Press Any Key to Restart');
  resetGame();
}

function resetGame() {
  level = 0;
  gamePattern = [];
  userPattern = [];
}
