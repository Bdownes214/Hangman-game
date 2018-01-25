// console.log("Linked");
// Variables
// an array of random words
var randomWords = ["dragon", "knight", "wizard", "magic","king","castle"];
var livesElements = document.getElementById("lives-remaining");
var wordElement = document.querySelector("#randomWordContainer");
// # of guesses left
var guessesLeft = 9;
guessesLeft--
livesElements.innerText = "Lives: " + guessesLeft;

// an array of key press value
var correctGuesses = [];

// # of wins
var wins = 0;

// # of loses
var loses = 0;

// Step: Select a random word
var randomWordToGuess = randomWords[Math.floor(Math.random() * randomWords.length)];
console.log(randomWordToGuess);

// Step: Display random word on screen
for (var i = 0; i < randomWordToGuess.length; i++) {
  wordElement.innerHTML += "<span>" + "_ " + "</span>";
}

// Step: Click handler to register user key Press
document.onkeyup = function (event) {
  // guessesLeft--
  // livesElements.innerText = "Lives: " + guessesLeft;
  // console.log(event.key);
  letter = (event.key).toLowerCase();

  if(randomWordToGuess.includes(letter) && !correctGuesses.includes(letter)){
    correctGuesses.push(letter)
  }

  var wordDisplay = ""

  for(var i=0; i< randomWordToGuess.length; i++){
    if(correctGuesses.includes(randomWordToGuess[i])){
      wordDisplay += " " + randomWordToGuess[i]
    }
    else{
      wordDisplay += " _";
    }
  }

  wordElement.innerText = wordDisplay
};




// Step: Display user key press value on screen
// Step: Compare user key press value to random word
// Step: display number of correct guesses and incorrect guesses
