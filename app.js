//make an array of random words (animal words)
//document.addEventListener('keyup', (event) => {
//const keyName = event.key;

//five letter word is going to need 5 blanks
//local storage will need total wins and total losses

//query selector (less 16)
// Adds listener for keydown event
// document.addEventListener("keydown", keydownAction);
// Adds listener for keyup event
// document.addEventListener("keyup", keyupAction);

//if the key done is one of the letters of the word, will flip from hidden to displayed
//need timer (we select time)
//loss game timer (less 9)
//function set interval time interval with seconds left, when seconds left = zero an alert will prompt stating that game have be lost
//is user gets all letters, they win, win display goes up
//have all banks been used-win
//win is each word when all letters are no longer hidden
//add a reset button to clear wins and lost. event setter as a button




var words = ["horse", "tiger", "elephant", "crocodile", "lion"]
var randomLetters = function () {
    for (var i = 0; i < words.length; i++)
        var word = Math.floor(Math.random(letters[i]))
    return randomLetters
};
let correctguess = false;
for (let i = 0; i < currentAnswer.length; i++) {
    if (currentAnswer[i] === guess.Answer()) {
        correctguess = true;
    }
};
var wordBlank = document.querySelector(".word-blanks");
//setting up the word blanks for eacher word
var win = document.querySelector(".win");
//setting the win counter
var lose = document.querySelector("lose");
//setting the lose counter
var timerElement = document.querySelector(".timer-count");
//timer used for each round of the game
//no specificity from requirements-use like 30 seconds
var startButton = document.querySelector(".start-button");
//with click of the button-the game starts, more specifically the timer starts and the words are guessable

var chosenWord = "";
var numberBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;
//other var needed to connect to functions to make the game work

//arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];




// puzzleElement.textContent = puzzle.substr(0, i) + guess.toUpperCase() + puzzle.substr(i + 1);
// var guessInput = document.getElementById("guessInput");
// var puzzleElement = document.getElementById("puzzle");
// var puzzle = puzzleElement.textContent;
// var guess = guessInput.value;


// Check if the puzzle is complete
// if (puzzleElement.textContent === currentAnswer) {
//     alert("Congratulations! You solved the puzzle!");
//     endGame();
//   } else if (currentGuesses === maxGuesses) {
//     alert("Sorry, you have run out of guesses.");
//     endGame();
//   }

myButton.addEventListener("click", function () {
    // Code to execute when the button is clicked
});

var hiddenLetterElement = document.getElementById("hiddenLetter");