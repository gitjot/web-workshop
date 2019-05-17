let randomNumber = Math.floor(Math.random() * 10) + 1;
const computerNumber = document.querySelector('.computerNumber');
computerNumber.textContent = randomNumber;

const guesses = document.querySelector('.guesses');
const feedback = document.querySelector('.feedback');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
  let userGuess = Number(guessField.value);

  if (userGuess === randomNumber) {
    feedback.textContent = 'Congratulations! You got it right!';
  } else {
    feedback.textContent = 'Wrong!';
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
}
