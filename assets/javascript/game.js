

// Creating variables to hold the number of wins
var wins = 0;


// Create variables that hold references to the places in the HTML where we want to display things.
var instructions = document.getElementById("instructions");
var winsText = document.getElementById("wins");
var curWord = document.getElementById("currentWord");
var guessRem = document.getElementById("guessRemain");
var alreadyGuess = document.getElementById("alreadyGuessed");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

var userGuess = event.key;    

for (i = 0; i<4; i++){
    if (userGuess==="r"){
        wins++
    winsText.textContent = wins
        
    }
}
    
}








    ;
