const COLORS = ['red', 'blue', 'green', 'yellow'];
const gamePattern = [];
const userPattern = [];

function newSequence() {
  let randomColor = Math.floor(Math.random() * 4);
  const color = COLORS[randomColor];
  gamePattern.push(color);
  $(`#${color}`).fadeIn(100).fadeOut(100).fadeIn(100);
  const sound = new Audio(`sounds/${color}.mp3`);
  sound.play();
}

$('[type="button"]').click(function () {
  const userChosenColour = $(this).attr('id');
  userPattern.push(userChosenColour);
  console.log(userPattern);
});
