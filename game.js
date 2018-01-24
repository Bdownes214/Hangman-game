// console.log("Linked");
// Variables
// an array of random words
var randomWords = ["dragon", "knight", "wizard", "magic","king","castle"];


// an array of key press value
var pressedKeys = [];

// # of guesses left
var guessesLeft = 9;

// # of wins
var wins = 0;

// # of loses
var loses = 0;

// Step: Select a random word
var randomWordToGuess = randomWords[Math.floor(Math.random() * randomWords.length)];
console.log(randomWordToGuess);

// Step: Display random word on screen
for (var i = 0; i < randomWordToGuess.length; i++) {
  document.querySelector("#randomWordContainer").innerHTML += "<span>" + randomWordToGuess[i] + "</span>";
}

// Step: Separate random word into blank spaces

// Step: Click handler to register user key Press
document.onkeyup = function (event) {
  // console.log(event.key);
  pressedKeys.push(event.key); // Array manipulation methods: push, pop, shift, unshift
  // console.log(pressedKeys);

};




// Step: Display user key press value on screen
// Step: Compare user key press value to random word
// Step: display number of correct guesses and incorrect guesses
