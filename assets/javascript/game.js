

// Creating variables to hold the number of wins
var wins = 0;
var guessRemain = 15;

// titanic gladiator jaws 

// Create variables that hold references to the places in the HTML where we want to display things.
var instructions = document.getElementById("instructions");
var winsText = document.getElementById("wins");
var curWord = document.getElementById("currentWord");
var guessRem = document.getElementById("guessRemain");
var alreadyGuess = document.getElementById("alreadyGuessed");

//stores and displays user guesses
var x = 0;
var guesses = Array();
var movie = ["Jaws", "Gladiator", "Titanic"]

window.onload = function() {
chosenMovie = movie[Math.floor(Math.random() * movie.length)];
word = chosenMovie[Math.floor(Math.random() * chosenMovie.length)];
word.replace(/\s/g, "-");
curWord.textContent = word;
console.log(word);
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




guessRem.textContent = guessRemain;

;
