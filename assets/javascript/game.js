//Declaring variable 
var word = ['titanic', "jaws", "gladiator", "goodfellas", "interstellar", "it", "paul", "babe" ];
var remainingGuesses;
var correctGuesses;
var wrongGuesses;
var wins = 0;


//Displaying in HTML
var wordElement = document.getElementById('currentWord');
var letterCountElement = document.getElementById('guessRemain');
var lettersGuessedElement = document.getElementById('alreadyGuessed');
var winCounter = document.getElementById('wins');
var winScreen = document.getElementById('win')
var loseScreen = document.getElementById('lose')


//Function to clear the letters out and start the game
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
    console.log(chosenMovie.toUpperCase());
}

//I was unable to figure out how to not allow a user to guess the same letter twice 
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
          //I tried to add audio, but could not figure out how to get it to stop playing once the game ended 
        //var audio = new Audio("assets/01 Celebration (Single Version).m4a")
        //audio.play();
        wins++;
        winCounter.textContent = wins;
        loseScreen.textContent = " ";
        document.getElementById("win").style.display = 'block';
        winScreen.textContent = (chosenMovie.toUpperCase() + " is correct! You win!!!!");
        startGame();
        lettersGuessedElement.innerHTML = "";
        

    } else if (remainingGuesses === 0) {
        //I tried to add audio, but could not figure out how to get it to stop playing once the game ended 
        //var audio = new Audio("assets/01 When We Stand Together.mp3")
        //audio.play();
        document.getElementById("lose").style.display = 'block';
        winScreen.textContent = " ";
        loseScreen.textContent = ("The correct answer was " + chosenMovie.toUpperCase() + "  You failed miserably!! You lose!!!!");
        startGame();       
        lettersGuessedElement.innerHTML = "";
    }
}
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    updateGuesses(letterGuessed);
    checkWin();
};

startGame();












