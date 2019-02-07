



// titanic gladiator jaws 

// Create variables that hold references to the places in the HTML where we want to display things.
/*var instructions = document.getElementById("instructions");
var winsText = document.getElementById("wins");
var curWord = document.getElementById("currentWord");
var guessRem = document.getElementById("guessRemain");
var alreadyGuess = document.getElementById("alreadyGuessed");*/


var word = ['titanic', "jaws", "gladiator"];
var remainingGuesses;
var correctGuesses;
var wrongGuesses;
var wins = 0;

var wordElement = document.getElementById('currentWord');
var letterCountElement = document.getElementById('guessRemain');
var lettersGuessedElement = document.getElementById('alreadyGuessed');
var winCounter = document.getElementById('wins');
var winScreen = document.getElementById('maincontent')

function startGame() {
    chosenMovie = word[Math.floor(Math.random() * word.length)];
    remainingGuesses = 10;
    wrongGuesses = [];
    correctGuesses = [];

    // push underscores to correctGuesses
    for (var i = 0; i < chosenMovie.length; i++) {
        correctGuesses.push('_');
    }

    wordElement.innerHTML = correctGuesses.join(' ');
    letterCountElement.innerHTML = remainingGuesses;
}

function updateGuesses(letter) {
    remainingGuesses--;
    letterCountElement.innerHTML = remainingGuesses;

    if (chosenMovie.indexOf(letter) === -1) {
        wrongGuesses.push(letter);
        lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
    } else {

        for (var i = 0; i < chosenMovie.length; i++) {
            if (chosenMovie[i] === letter) {
                correctGuesses[i] = letter;
            }
        }

        wordElement.innerHTML = correctGuesses.join(' ');
    }
}

function checkWin() {
    if (correctGuesses.indexOf('_') === -1) {
        alert('You Won!');
        wins++;
        winCounter.textContent = wins;
        var audio = new Audio("assets/01 Celebration (Single Version).m4a")
        audio.play();


    } else if (remainingGuesses === 0) {
        var audio = new Audio("assets/01 When We Stand Together.mp3")
        audio.play();
    }
}

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    updateGuesses(letterGuessed);
    checkWin();
};

startGame();
















/*stores and displays user guesses
var x = 0;
var guesses = Array();
var movie = ["Jaws", "Gladiator", "Titanic"]

window.onload = function() {
chosenMovie = movie[Math.floor(Math.random() * movie.length)];
//word = chosenMovie[Math.floor(Math.random() * chosenMovie.length)];
chosenMovie.replace( "-");
curWord.textContent = chosenMovie;
console.log(chosenMovie);
}
//stores guessses and counts down number of guesses from 15
result = document.onkeyup = function (event) {

    guesses[x] = event.key;
    x++;
    document.getElementById("alreadyGuessed").value = "";
    var e = "<hr/>";
    for (var y = 0; y < guesses.length; y++) {
        e += guesses[y] + ", ";
    }
    document.getElementById("alreadyGuessed").innerHTML = e;
    --guessRemain;
    guessRem.textContent = guessRemain;

    if (guessRemain <= 0) {
        alert("YOU FAIL!!! REFRESH TO TRY AGAIN")
    }









}




guessRem.textContent = guessRemain;*/

;
