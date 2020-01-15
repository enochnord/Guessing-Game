// create number for guessing
var guessNumber = 6;

// ask for guess
var guess = Number(prompt("Guess a number"));

// check for the right guess
if(guess === guessNumber) {
    alert("Congratulations you guessed it!!!");
}

// check if the guess is higher
else if(guess > guessNumber) {
    alert("Guess is too high. Try again!")
}

// check if the guess is too low
else if(guess < guessNumber) {
    alert("Guess is too low. Try again!")
}

// message to display if guess is wrong
else {
    alert("Try again!!!")
}