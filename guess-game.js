function guessGame() {
  let randomNumber = Math.round(Math.random() * 10);
  let guess;
  do {
    guess = prompt("Guess the number from 0 to 10");
    if (guess > randomNumber) {
      alert("Your choose is too high, try again");
    } else if (guess < randomNumber) {
      alert("Your choose is too low, try again");
    }
  } while (guess != randomNumber);
  alert("You won!");
}

guessGame();
