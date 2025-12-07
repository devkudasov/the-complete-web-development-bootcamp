document.addEventListener('keydown', handleButtonPress);

document.querySelectorAll('.drum').forEach((button) => {
  button.addEventListener('click', handleClick);
});

function handleClick() {
  playSound(this.textContent);
  buttonAnimation(this.textContent);
}

function handleButtonPress(e) {
  playSound(e.key);
  buttonAnimation(e.key);
}

function playSound(key) {
  const sound = getSound(key);
  if (sound) {
    const audio = new Audio(sound);
    audio.play();
  }
}

function getSound(key) {
  switch (key) {
    case 'w':
      return 'sounds/tom-1.mp3';
    case 'a':
      return 'sounds/tom-2.mp3';
    case 's':
      return 'sounds/tom-3.mp3';
    case 'd':
      return 'sounds/tom-4.mp3';
    case 'j':
      return 'sounds/snare.mp3';
    case 'k':
      return 'sounds/crash.mp3';
    case 'l':
      return 'sounds/kick-bass.mp3';
    default:
      console.error('Invalid key');
      return '';
  }
}

function buttonAnimation(key) {
  const activeButton = document.querySelector(`.${key}`);
  activeButton.classList.add('pressed');
  setTimeout(() => {
    activeButton.classList.remove('pressed');
  }, 100);
}
