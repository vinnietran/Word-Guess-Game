



// titanic gladiator jaws 

// Create variables that hold references to the places in the HTML where we want to display things.
/*var instructions = document.getElementById("instructions");
var winsText = document.getElementById("wins");
var curWord = document.getElementById("currentWord");
var guessRem = document.getElementById("guessRemain");
var alreadyGuess = document.getElementById("alreadyGuessed");*/


var word = ['titanic', "jaws", "gladiator", "goodfellas", "interstellar", "it", "paul" ];
var remainingGuesses;
var correctGuesses;
var wrongGuesses;
var wins = 0;

var wordElement = document.getElementById('currentWord');
var letterCountElement = document.getElementById('guessRemain');
var lettersGuessedElement = document.getElementById('alreadyGuessed');
var winCounter = document.getElementById('wins');
var winScreen = document.getElementById('main-stuff')
var loseScreen = document.getElementById('main-stuff')
var reset = document.getElementById("reset")


function startGame() {
    chosenMovie = word[Math.floor(Math.random() * word.length)];
    remainingGuesses = 15;
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
        wins++;
        winCounter.textContent = wins;
        var audio = new Audio("assets/01 Celebration (Single Version).m4a")
        audio.play();
        winScreen.textContent = ' ';
        //show_image('assets/WIN.jpeg', 500, 500,"fireworks")


    } else if (remainingGuesses === 0) {
        var audio = new Audio("assets/01 When We Stand Together.mp3")
        audio.play();
        //loseScreen.textContent = ' ';
        var loss = document.createElement("div");
        div.innerHTML = "You Lose! Suffer through Nickelback for your penance!"
        document.body.appendChild(div);
        
    }
}

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    updateGuesses(letterGuessed);
    checkWin();
};
//https://www.w3schools.com/js/js_htmldom_css.asp

/*function show_image(src, width, height, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    // This next line will just add it to the <body> tag
    document.getElementById('title').appendChild(img);
}*/


startGame();

reset.onclick = function() {startGame()};
















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
