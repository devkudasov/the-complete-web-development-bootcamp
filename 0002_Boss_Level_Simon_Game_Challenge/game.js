const COLORS = ['red', 'blue', 'green', 'yellow'];
const gamePattern = [];
const userPattern = [];

let level = 0;

function nextSequence() {
  upgradeLevel();
  let randomColor = Math.floor(Math.random() * 4);
  const color = COLORS[randomColor];
  gamePattern.push(color);
  $(`#${color}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(color);
}

$('[type="button"]').click(function () {
  const userChosenColour = $(this).attr('id');

  userPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
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
}

nextSequence();
nextSequence();
nextSequence();
