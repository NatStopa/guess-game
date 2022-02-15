function game() {
  const chooseSubmit = document.querySelector("#choose-button");
  const choiceInput = document.querySelector("#choose-input");
  const userChoicePreview = document.querySelector("#user-choice-preview");
  const computerChoicePreview = document.querySelector(
    "#computer-choice-preview"
  );
  const result = document.querySelector("#result");
  let computerChoice = Math.floor(Math.random() * 10) + 1;
  chooseSubmit.onclick = function (event) {
    event.preventDefault();
    let userChoice = choiceInput.value;
    userChoicePreview.innerHTML = userChoice;
    if (computerChoice < userChoice) {
      result.innerHTML = "Your choose is too high, try again";
    } else if (computerChoice > userChoice) {
      result.innerHTML = "Your choose is too low, try again";
    } else {
      computerChoicePreview.innerHTML = computerChoice;
      result.innerHTML = "You won!";
    }
  };
}

game();
