let isBlack = true;
let a = document.getElementById("text");
function toggleButton() {
  if (isBlack) {
    document.body.style.backgroundColor = "white";
    a.style.color = "black";
    a.innerText = "White Theme";
    isBlack = false;
  } else {
    document.body.style.backgroundColor = "black";
    a.style.color = "white";
    a.innerText = "Black Theme";
    isBlack = true;
  }
}
const input = document.getElementById("input");
const output = document.getElementById("output");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function () {
  output.textContent = `Start the game " ${input.value} "`;
});
// Generate a random number between 1 and 25
let randomNumber = Math.floor(Math.random() * 25) + 1;

// Initialize the number of guesses to zero
let numGuesses = 0;

function checkGuess() {
  // Get the user's guess
  let userGuess = parseInt(document.getElementById("userGuess").value);

  // Check if the guess is valid
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 25) {
    document.getElementById("result").innerHTML =
      "Please enter a valid number from 1 to 25";
    return;
  }

  // Increase the number of guesses
  numGuesses++;
  document.getElementById("numGuesses").innerHTML = numGuesses;

  // Check if the guess is correct
  if (userGuess === randomNumber) {
    document.getElementById(
      "result"
    ).innerHTML = `Congratulations ${input.value}! You guessed the number in ${numGuesses} guesses.`;

  } else if (userGuess < randomNumber) {
    document.getElementById("result").innerHTML = "Too low, try again.";
  } else {
    document.getElementById("result").innerHTML = "Too high, try again.";
  }
}
let clear=document.getElementById("userGuess")
function clearInput(){
clear.value=""
}

function restart() {
  // Reset the random number and number of guesses
  randomNumber = Math.floor(Math.random() * 25) + 1;
  numGuesses = 0;

  // Clear the input field and result message
  document.getElementById("userGuess").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("numGuesses").innerHTML ="_";
}
