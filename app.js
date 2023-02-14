//make an array of random words (animal words)
var words = ["horse", "tiger", "elephant", "crocodile", "lion" ]
var randomWord = function () {
    for(var i =0; i< words.length; i++) 
   var word = Math.floor(Math.random(words[i]))
    return randomWord
}


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
