var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//variables to keep track of wins, losses, guesses left and letters already guessed
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var alreadyGuessed = [];
//variables to target our p tags in the html to change text later
var guessesLeftText = document.getElementById("guessesLeft");
var alreadyGuessedText = document.getElementById("userGuesses");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
//global function to reset the game
function resetGame() {
  //computer new guess
  computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  //empty the already guessed array
  alreadyGuessed = [];
  //reset guessesLeft
  guessesLeft = 5;
  //Display our info on the screen
  guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
  alreadyGuessedText.textContent = "Already Guessed Letters: " + alreadyGuessed;
  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
}
//Display our info on the screen
guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
alreadyGuessedText.textContent = "Already Guessed Letters: " + alreadyGuessed;
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
document.onkeyup = function(event) {
  //take the key the user presses and sets it equal to our userGuess variable
  var userGuess = event.key.toLowerCase();
  //decrese guesses Left by one
  guessesLeft--;
  // Check to see if there are guesses available
  if (guessesLeft === 0) {
    //increase the losses
    losses++;
    //update losses on the screen
    lossesText.textContent = "Losses: " + losses;
    //empty alreadyguessed array
    alreadyGuessed = [];
    //reset the game
    resetGame();
    //alert user they ran out of guesses
    alert("Sorry you ran out of guesses");
  }
  //logging the computer guess and the user guess to the console
  console.log("Computer Guess: " + computerGuess);
  console.log("User Guess: " + userGuess);
  //Display our info on the screen
  guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
  alreadyGuessedText.textContent = "Already Guessed Letters: " + alreadyGuessed;
  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  //check if the  userGues is a letter  and also if that letter has already been guessed
  if (
    alphabet.indexOf(userGuess) > -1 &&
    alreadyGuessed.indexOf(userGuess) === -1
  ) {
    //if the key is a letter and it hasn't already been guessed we want to store it in our alreadyGuessed array and decrease our guesses left
    alreadyGuessed.push(userGuess);
    //update already guessed letters on screen
    alreadyGuessedText.textContent =
      "Already Guessed Letters: " + alreadyGuessed;
    //check if userGuess is equal to the computerguess
    if (userGuess === computerGuess) {
      //add to the wins
      wins++;
      //update wins on screen
      winsText.textContent = "Wins: " + wins;
      //reset the game
      resetGame();
      //alert user that they won
      alert("You won!");
    }
  }
};