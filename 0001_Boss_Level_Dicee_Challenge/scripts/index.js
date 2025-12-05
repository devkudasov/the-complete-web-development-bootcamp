function rollDice() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let dice1 = document.querySelector('.img1');
  dice1.src = `images/dice${randomNumber1}.png`;

  let dice2 = document.querySelector('.img2');
  dice2.src = `images/dice${randomNumber2}.png`;

  let heading = document.querySelector('h1');
  if (randomNumber1 > randomNumber2) {
    heading.textContent = '🚩 Player 1 Wins!';
  } else if (randomNumber2 > randomNumber1) {
    heading.textContent = 'Player 2 Wins! 🚩';
  } else {
    heading.textContent = "It's a Draw!";
  }
}