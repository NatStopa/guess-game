function guessGame() {
  let randomNumber = Math.round(Math.random() * 10);
  let guess;
  do {
    guess = prompt("Guess the number from 0 to 10");
    console.log(guess, randomNumber);
  } while (guess != randomNumber);
  alert("You won!");
}

guessGame();
